#!/usr/bin/env tsx

/**
 * Quick Visual Component Check
 * 
 * A simpler script that just opens Storybook in a browser
 * for manual visual inspection of components
 */

import puppeteer from 'puppeteer';
import { spawn, ChildProcess } from 'child_process';

class QuickVisualChecker {
  private storybookProcess: ChildProcess | null = null;

  async startStorybook(): Promise<void> {
    console.log('📚 Starting Storybook...');
    
    this.storybookProcess = spawn('npm', ['run', 'dev'], {
      stdio: 'inherit',
      cwd: process.cwd()
    });

    // Wait for Storybook to start
    await new Promise(resolve => setTimeout(resolve, 10000));
  }

  async openBrowser(componentName?: string): Promise<void> {
    console.log('🌐 Opening browser for visual inspection...');
    
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: [
        '--start-maximized',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor'
      ]
    });

    const page = await browser.newPage();
    
    // Navigate to Storybook
    let url = 'http://localhost:6006';
    
    if (componentName) {
      // Try to navigate directly to the component
      url += `/?path=/story/${componentName.toLowerCase()}--default`;
    }
    
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    console.log('✅ Browser opened! You can now visually inspect your components.');
    console.log('📝 Check for:');
    console.log('   - Pixel-perfect match to Figma');
    console.log('   - Correct colors and spacing');
    console.log('   - Interactive states working');
    console.log('   - Responsive behavior');
    console.log('   - Accessibility features');
    console.log('\n⚠️  Close the browser window to exit.');

    // Keep the script running until browser is closed
    browser.on('disconnected', () => {
      console.log('🔚 Browser closed, shutting down...');
      this.cleanup();
      process.exit(0);
    });
  }

  cleanup(): void {
    if (this.storybookProcess) {
      this.storybookProcess.kill();
      console.log('🧹 Storybook server stopped');
    }
  }
}

async function main() {
  const componentName = process.argv[2];
  const checker = new QuickVisualChecker();

  try {
    await checker.startStorybook();
    await checker.openBrowser(componentName);
  } catch (error) {
    console.error('❌ Error:', error);
    checker.cleanup();
    process.exit(1);
  }
}

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down...');
  process.exit(0);
});

// Check if this file is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { QuickVisualChecker };