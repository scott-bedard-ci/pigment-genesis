import puppeteer from 'puppeteer';

(async () => {
  console.log('🔍 Checking AvatarGroup rendering...');
  
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // Navigate to Storybook first
    console.log('🌐 Navigating to Storybook...');
    await page.goto('http://localhost:6006/');
    
    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check page title
    const title = await page.title();
    console.log('📄 Page title:', title);
    
    // Try to find the Avatar stories
    console.log('🔍 Looking for Avatar stories...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Try to navigate to BasicGroup story
    console.log('🎯 Navigating to BasicGroup story...');
    await page.goto('http://localhost:6006/?path=/story/atoms-avatar--basic-group');
    
    // Wait for story content to load (try different selectors)
    console.log('⏳ Waiting for story content...');
    
    // Wait for the story iframe
    await page.waitForSelector('iframe[title="storybook-preview-iframe"]', { timeout: 15000 });
    console.log('✅ Found preview iframe');
    
    // Switch to iframe content
    const iframe = await page.$('iframe[title="storybook-preview-iframe"]');
    const iframeContent = await iframe.contentFrame();
    
    if (!iframeContent) {
      throw new Error('Could not access iframe content');
    }
    
    // Wait for content in iframe
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Check console logs
    const consoleLogs = [];
    iframeContent.on('console', msg => {
      consoleLogs.push(msg.text());
    });
    
    // Force a refresh to trigger console logs
    await page.reload();
    await page.waitForSelector('iframe[title="storybook-preview-iframe"]', { timeout: 15000 });
    const iframe2 = await page.$('iframe[title="storybook-preview-iframe"]');
    const iframeContent2 = await iframe2.contentFrame();
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('🔍 Console logs from avatar rendering:');
    consoleLogs.forEach(log => console.log('  ', log));
    
    // Check if avatars are rendered in iframe
    const avatarElements = await iframeContent.$$('[class*="inline-flex"][class*="rounded-full"]');
    console.log(`📊 Found ${avatarElements.length} avatar elements`);
    
    // Get detailed info about each avatar
    for (let i = 0; i < avatarElements.length; i++) {
      const avatar = avatarElements[i];
      const classes = await avatar.evaluate(el => el.className);
      const styles = await avatar.evaluate(el => el.style.cssText);
      const innerHTML = await avatar.evaluate(el => el.innerHTML);
      
      console.log(`\n🔍 Avatar ${i + 1}:`);
      console.log(`  Classes: ${classes}`);
      console.log(`  Inline styles: ${styles}`);
      console.log(`  Content: ${innerHTML.substring(0, 100)}...`);
    }
    
    // Get the root div content to see the full structure
    const rootDiv = await iframeContent.$('#storybook-root, #root, [data-testid="root"]');
    if (rootDiv) {
      const rootContent = await rootDiv.evaluate(el => el.outerHTML);
      console.log('\n📄 Root element HTML:', rootContent.substring(0, 1000) + '...');
    } else {
      console.log('\n📄 No root element found, checking body...');
      const bodyContent = await iframeContent.$eval('body', el => el.innerHTML);
      console.log('📄 Body content:', bodyContent.substring(0, 1000) + '...');
    }
    
    // Take a screenshot
    await page.screenshot({ path: 'avatar-group-check.png', fullPage: true });
    console.log('📸 Screenshot saved as avatar-group-check.png');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
})();