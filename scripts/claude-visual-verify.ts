#!/usr/bin/env tsx

/**
 * Claude Code Visual Verification Script
 * 
 * This script is specifically designed for Claude Code to:
 * 1. Start Storybook automatically
 * 2. Capture component screenshots
 * 3. Save them for Claude to analyze
 * 4. Generate analysis report
 */

import puppeteer, { Browser, Page } from 'puppeteer';
import { spawn, ChildProcess } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';

interface ClaudeVisualConfig {
  storybookPort: number;
  outputDir: string;
  componentName: string;
  viewports: Array<{ name: string; width: number; height: number }>;
}

class ClaudeVisualVerifier {
  private browser: Browser | null = null;
  private storybookProcess: ChildProcess | null = null;
  private config: ClaudeVisualConfig;

  constructor(componentName: string) {
    this.config = {
      storybookPort: 6006,
      outputDir: path.join(process.cwd(), 'visual-verification', 'claude-analysis'),
      componentName,
      viewports: [
        { name: 'mobile', width: 375, height: 667 },
        { name: 'desktop', width: 1440, height: 900 }
      ]
    };
  }

  async runFullVerification(): Promise<string[]> {
    console.log(`🎨 Starting Claude visual verification for: ${this.config.componentName}`);
    
    try {
      await this.initialize();
      const screenshots = await this.captureComponentScreenshots();
      await this.generateAnalysisReport(screenshots);
      
      console.log('✅ Visual verification complete!');
      console.log(`📁 Screenshots saved to: ${this.config.outputDir}`);
      
      return screenshots;
      
    } catch (error) {
      console.error('❌ Visual verification failed:', error);
      throw error;
    } finally {
      await this.cleanup();
    }
  }

  private async initialize(): Promise<void> {
    console.log('🚀 Initializing visual verification...');
    
    // Create output directory
    await fs.mkdir(this.config.outputDir, { recursive: true });
    
    // Start Storybook server
    await this.startStorybook();
    
    // Launch Puppeteer (headless for Claude)
    this.browser = await puppeteer.launch({
      headless: true, // Headless for automated analysis
      args: ['--no-sandbox', '--disable-setuid-sandbox']
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

    // Suppress most output, only show important messages
    this.storybookProcess.stdout?.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Local:') || output.includes('ready')) {
        console.log('✅ Storybook is ready');
      }
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
        return;
      } catch (error) {
        attempts++;
        console.log(`⏳ Waiting for Storybook... (${attempts}/${maxAttempts})`);
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    throw new Error('❌ Storybook failed to start');
  }

  private async captureComponentScreenshots(): Promise<string[]> {
    console.log(`📸 Capturing screenshots for ${this.config.componentName}...`);

    const page = await this.browser!.newPage();
    const screenshots: string[] = [];
    
    // Navigate to Storybook
    await page.goto(`http://localhost:${this.config.storybookPort}`, {
      waitUntil: 'networkidle0'
    });

    // Get component stories
    const stories = await this.getComponentStories(page);

    for (const story of stories) {
      console.log(`📷 Capturing: ${story.name}`);
      
      // Navigate to story
      await page.goto(story.url, { waitUntil: 'networkidle0' });
      
      // Wait for component to render - try multiple selectors
      try {
        await page.waitForSelector('#storybook-root, .sb-show-main, .docs-story', { timeout: 10000 });
      } catch (error) {
        console.log('⚠️  Standard selectors not found, trying generic wait...');
        await new Promise(resolve => setTimeout(resolve, 3000)); // Fallback wait
      }
      
      // Capture at different viewports
      for (const viewport of this.config.viewports) {
        await page.setViewport({
          width: viewport.width,
          height: viewport.height
        });

        // Wait for responsive changes
        await new Promise(resolve => setTimeout(resolve, 500));

        const filename = `${this.config.componentName}-${story.name}-${viewport.name}.png`;
        const filepath = path.join(this.config.outputDir, filename);
        
        // Try different selectors for the component area
        let elementToCapture = await page.$('.sb-show-main');
        if (!elementToCapture) {
          elementToCapture = await page.$('#storybook-root');
        }
        if (!elementToCapture) {
          elementToCapture = await page.$('.docs-story');
        }
        
        if (elementToCapture) {
          await elementToCapture.screenshot({
            path: filepath,
            type: 'png'
          });
          screenshots.push(filepath);
          console.log(`  ✅ Saved: ${filename}`);
        } else {
          // Fallback: capture the entire page
          await page.screenshot({
            path: filepath,
            type: 'png',
            fullPage: false
          });
          screenshots.push(filepath);
          console.log(`  ⚠️  Fallback screenshot saved: ${filename}`);
        }
      }
    }

    await page.close();
    return screenshots;
  }

  private async getComponentStories(page: Page): Promise<Array<{name: string, url: string}>> {
    // Simple approach: generate known story URLs based on our component structure
    const baseUrl = `http://localhost:${this.config.storybookPort}`;
    const componentNameLower = this.config.componentName.toLowerCase();
    
    const stories = [
      {
        name: 'Default',
        url: `${baseUrl}/?path=/story/atoms-${componentNameLower}--default`
      },
      {
        name: 'AllStates',
        url: `${baseUrl}/?path=/story/atoms-${componentNameLower}--all-states`
      },
      {
        name: 'Selected',
        url: `${baseUrl}/?path=/story/atoms-${componentNameLower}--selected`
      },
      {
        name: 'Playground',
        url: `${baseUrl}/?path=/story/atoms-${componentNameLower}--playground`
      }
    ];

    // Try to verify at least one story loads before proceeding
    try {
      await page.goto(stories[0].url, { waitUntil: 'networkidle0', timeout: 15000 });
      console.log('✅ Confirmed story access');
      return stories;
    } catch (error) {
      console.log('⚠️  Default story URL failed, trying generic approach...');
      // Fallback to just the main page
      return [{
        name: 'MainPage',
        url: baseUrl
      }];
    }
  }

  private async generateAnalysisReport(screenshots: string[]): Promise<void> {
    const reportContent = `# Visual Verification Report - ${this.config.componentName}

## Generated for Claude Code Analysis
**Component**: ${this.config.componentName}
**Generated**: ${new Date().toISOString()}
**Screenshots**: ${screenshots.length} captured

## Screenshots Captured
${screenshots.map((screenshot, index) => {
  const filename = path.basename(screenshot);
  return `${index + 1}. **${filename}**\n   - Path: \`${screenshot}\``;
}).join('\n')}

## Analysis Checklist for Claude Code

### Visual Quality Verification
- [ ] Component renders without visual errors
- [ ] Colors match Figma design specifications
- [ ] Spacing and measurements are pixel-accurate
- [ ] Typography matches Figma specifications
- [ ] Interactive states display correctly
- [ ] Responsive behavior works as expected

### Design Token Verification  
- [ ] All colors use extracted design tokens (no hardcoded values)
- [ ] Spacing uses design system scale
- [ ] Typography uses defined token values
- [ ] Component maintains visual consistency

### Accessibility Verification
- [ ] Focus states are visible and appropriate
- [ ] Touch targets meet minimum size requirements
- [ ] Color contrast meets accessibility standards
- [ ] Component structure is semantically correct

## Next Steps for Claude Code
1. **Read each screenshot** using the Read tool to visually analyze
2. **Compare against Figma** design specifications  
3. **Verify design token usage** in component implementation
4. **Identify any issues** and provide specific feedback
5. **Approve or request changes** based on analysis

## Quality Gate
✅ Component approved for production use
❌ Component requires changes before approval

---
*This report was generated automatically for Claude Code visual verification.*
`;

    const reportPath = path.join(this.config.outputDir, `${this.config.componentName}-analysis-report.md`);
    await fs.writeFile(reportPath, reportContent);
    console.log(`📊 Analysis report saved: ${reportPath}`);
  }

  private async cleanup(): Promise<void> {
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
  const componentName = process.argv[2];
  
  if (!componentName) {
    console.error('❌ Error: Component name is required');
    console.log('Usage: npm run claude-visual-verify ComponentName');
    process.exit(1);
  }
  
  const verifier = new ClaudeVisualVerifier(componentName);
  
  try {
    const screenshots = await verifier.runFullVerification();
    
    console.log('\n🎉 Claude visual verification complete!');
    console.log('📋 Next steps:');
    console.log('   1. Claude will analyze the captured screenshots');
    console.log('   2. Claude will compare against Figma designs');
    console.log('   3. Claude will verify design token usage');
    console.log('   4. Claude will provide approval or feedback');
    
  } catch (error) {
    console.error('❌ Visual verification failed:', error);
    process.exit(1);
  }
}

// Handle process termination
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down...');
  process.exit(0);
});

// Check if this file is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { ClaudeVisualVerifier };