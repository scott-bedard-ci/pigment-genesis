#!/usr/bin/env node

/**
 * Simple script to start Storybook and provide visual inspection instructions
 */

const { spawn } = require('child_process');

async function startVisualCheck() {
  const componentName = process.argv[2];
  
  console.log('🎨 Starting Visual Component Verification');
  console.log('==========================================');
  
  if (componentName) {
    console.log(`📋 Component: ${componentName}`);
  } else {
    console.log('📋 Component: All components');
  }
  
  console.log('\n📚 Starting Storybook server...');
  
  const storybook = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });

  // Wait a bit for Storybook to start
  setTimeout(() => {
    console.log('\n🌐 Storybook should now be running at: http://localhost:6006');
    console.log('\n✅ Visual Verification Checklist:');
    console.log('   🎯 Open http://localhost:6006 in your browser');
    console.log('   📐 Compare component with Figma designs side-by-side');
    console.log('   🎨 Verify colors match design tokens exactly');
    console.log('   📏 Check spacing and measurements are pixel-perfect');
    console.log('   🖱️  Test all interactive states (hover, focus, active)');
    console.log('   📱 Test responsive behavior on mobile, tablet, desktop');
    console.log('   ♿ Verify accessibility features are visible');
    
    if (componentName) {
      console.log(`\n🔍 Navigate to: Atoms → ${componentName}`);
    }
    
    console.log('\n⚠️  Press Ctrl+C to stop Storybook when done');
  }, 5000);

  // Handle cleanup
  process.on('SIGINT', () => {
    console.log('\n🛑 Stopping Storybook...');
    storybook.kill();
    process.exit(0);
  });
  
  storybook.on('close', (code) => {
    console.log('🔚 Storybook stopped');
    process.exit(code);
  });
}

startVisualCheck().catch(console.error);