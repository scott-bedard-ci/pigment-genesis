#!/usr/bin/env tsx

/**
 * Visual Component Verification Script
 * 
 * This script uses Puppeteer to:
 * 1. Start Storybook server
 * 2. Navigate to component stories
 * 3. Capture screenshots for visual verification
 * 4. Generate comparison reports
 * 
 * Usage: npm run visual-verify [component-name]
 */

import puppeteer, { Browser, Page } from 'puppeteer';
import { spawn, ChildProcess } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';

interface VisualVerificationConfig {
  storybookPort: number;
  outputDir: string;
  viewports: Array<{ name: string; width: number; height: number }>;
  componentStories: string[];
}

class VisualVerifier {
  private browser: Browser | null = null;
  private storybookProcess: ChildProcess | null = null;
  private config: VisualVerificationConfig;

  constructor(config: VisualVerificationConfig) {
    this.config = config;
  }

  async initialize(): Promise<void> {
    console.log('🚀 Starting visual verification process...');
    
    // Start Storybook server
    await this.startStorybook();
    
    // Launch Puppeteer
    this.browser = await puppeteer.launch({
      headless: false, // Set to false so you can see the browser
      defaultViewport: null,
      args: ['--start-maximized']
    });

    // Wait for Storybook to be ready
    await this.waitForStorybook();
  }

  private async startStorybook(): Promise<void> {
    console.log('📚 Starting Storybook server...');
    
    this.storybookProcess = spawn('npm', ['run', 'dev'], {
      stdio: 'pipe',
      cwd: process.cwd()
    });

    // Log Storybook output
    this.storybookProcess.stdout?.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Local:') || output.includes('ready')) {
        console.log('✅ Storybook is ready');
      }
    });

    this.storybookProcess.stderr?.on('data', (data) => {
      console.error('❌ Storybook error:', data.toString());
    });
  }

  private async waitForStorybook(): Promise<void> {
    const maxAttempts = 30;
    let attempts = 0;

    while (attempts < maxAttempts) {
      try {
        const page = await this.browser!.newPage();
        await page.goto(`http://localhost:${this.config.storybookPort}`, {
          waitUntil: 'networkidle0',
          timeout: 5000
        });
        await page.close();
        console.log('✅ Storybook server is responding');
        return;
      } catch (error) {
        attempts++;
        console.log(`⏳ Waiting for Storybook... (${attempts}/${maxAttempts})`);
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    throw new Error('❌ Storybook failed to start within timeout period');
  }

  async captureComponentScreenshots(componentName?: string): Promise<void> {
    if (!this.browser) {
      throw new Error('Browser not initialized');
    }

    console.log(`📸 Capturing screenshots for ${componentName || 'all components'}...`);

    const page = await this.browser.newPage();
    
    // Navigate to Storybook
    await page.goto(`http://localhost:${this.config.storybookPort}`, {
      waitUntil: 'networkidle0'
    });

    // Create output directory
    const outputDir = path.join(this.config.outputDir, componentName || 'all-components');
    await fs.mkdir(outputDir, { recursive: true });

    // Get list of stories to capture
    const stories = await this.getStoriesToCapture(page, componentName);

    for (const story of stories) {
      console.log(`📷 Capturing: ${story.title} - ${story.name}`);
      
      // Navigate to specific story
      await page.goto(story.url, { waitUntil: 'networkidle0' });
      
      // Wait for component to render
      await page.waitForSelector('[data-testid], .sb-show-main', { timeout: 10000 });
      
      // Capture screenshots at different viewports
      for (const viewport of this.config.viewports) {
        await page.setViewport({
          width: viewport.width,
          height: viewport.height
        });

        // Wait a bit for responsive changes
        await page.waitForTimeout(500);

        const filename = `${story.title}-${story.name}-${viewport.name}.png`;
        const filepath = path.join(outputDir, filename);
        
        // Focus on the component canvas
        const canvas = await page.$('.sb-show-main');
        if (canvas) {
          await canvas.screenshot({
            path: filepath,
            type: 'png'
          });
          console.log(`  ✅ Saved: ${filename}`);
        }
      }
    }

    await page.close();
  }

  private async getStoriesToCapture(page: Page, componentName?: string): Promise<Array<{title: string, name: string, url: string}>> {
    // Wait for Storybook to load
    await page.waitForSelector('[data-testid="sidebar-component"]', { timeout: 10000 });

    // Extract story information from Storybook sidebar
    const stories = await page.evaluate((targetComponent) => {
      const storyElements = document.querySelectorAll('[data-testid="sidebar-story-item"]');
      const extractedStories: Array<{title: string, name: string, url: string}> = [];

      storyElements.forEach((element) => {
        const link = element.querySelector('a');
        if (link) {
          const href = link.href;
          const text = link.textContent || '';
          const [title, name] = text.split(' - ');
          
          // Filter by component name if specified
          if (!targetComponent || title.toLowerCase().includes(targetComponent.toLowerCase())) {
            extractedStories.push({
              title: title.trim(),
              name: name ? name.trim() : 'Default',
              url: href
            });
          }
        }
      });

      return extractedStories;
    }, componentName);

    return stories;
  }

  async generateReport(): Promise<void> {
    console.log('📊 Generating visual verification report...');
    
    const reportContent = `
# Visual Verification Report
Generated: ${new Date().toISOString()}

## Screenshots Captured
- Output directory: ${this.config.outputDir}
- Viewports tested: ${this.config.viewports.map(v => v.name).join(', ')}

## Quality Checklist
- [ ] Components render without visual errors
- [ ] Typography matches Figma specifications  
- [ ] Colors match extracted design tokens
- [ ] Spacing and layout are pixel-perfect
- [ ] Interactive states display correctly
- [ ] Responsive behavior works across viewports
- [ ] Accessibility features are visible (focus states, etc.)

## Notes
Review the captured screenshots and compare with Figma designs for accuracy.
`;

    const reportPath = path.join(this.config.outputDir, 'visual-verification-report.md');
    await fs.writeFile(reportPath, reportContent);
    console.log(`✅ Report saved: ${reportPath}`);
  }

  async cleanup(): Promise<void> {
    console.log('🧹 Cleaning up...');
    
    if (this.browser) {
      await this.browser.close();
    }
    
    if (this.storybookProcess) {
      this.storybookProcess.kill();
    }
  }
}

// Main execution
async function main() {
  const componentName = process.argv[2]; // Optional component name filter
  
  const config: VisualVerificationConfig = {
    storybookPort: 6006,
    outputDir: path.join(process.cwd(), 'visual-verification'),
    viewports: [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1440, height: 900 }
    ],
    componentStories: [] // Will be populated dynamically
  };

  const verifier = new VisualVerifier(config);

  try {
    await verifier.initialize();
    await verifier.captureComponentScreenshots(componentName);
    await verifier.generateReport();
    
    console.log('🎉 Visual verification complete!');
    console.log(`📁 Screenshots saved to: ${config.outputDir}`);
    
  } catch (error) {
    console.error('❌ Visual verification failed:', error);
    process.exit(1);
  } finally {
    await verifier.cleanup();
  }
}

// Handle process termination
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down visual verification...');
  process.exit(0);
});

// Check if this file is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { VisualVerifier, VisualVerificationConfig };