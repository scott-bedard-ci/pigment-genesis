import puppeteer from 'puppeteer';

(async () => {
  console.log('🔍 Debugging Avatar vs AvatarGroup rendering...');
  
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // First check individual Avatar story
    console.log('📋 Testing individual Avatar story...');
    await page.goto('http://localhost:6006/?path=/story/atoms-avatar--default');
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Get iframe
    const iframe = await page.$('iframe[title="storybook-preview-iframe"]');
    const iframeContent = await iframe.contentFrame();
    
    // Check individual avatar
    const singleAvatar = await iframeContent.$('[class*="inline-flex"][class*="rounded-full"]');
    if (singleAvatar) {
      const singleStyle = await singleAvatar.evaluate(el => el.style.cssText);
      const singleBg = await singleAvatar.evaluate(el => getComputedStyle(el).backgroundColor);
      console.log('✅ Individual Avatar found');
      console.log('   Inline style:', singleStyle);
      console.log('   Computed background:', singleBg);
    } else {
      console.log('❌ No individual Avatar found');
    }
    
    // Now check BasicGroup story
    console.log('📋 Testing BasicGroup story...');
    await page.goto('http://localhost:6006/?path=/story/atoms-avatar--basic-group');
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const iframe2 = await page.$('iframe[title="storybook-preview-iframe"]');
    const iframeContent2 = await iframe2.contentFrame();
    
    // Check group avatars
    const groupAvatars = await iframeContent2.$$('[class*="inline-flex"][class*="rounded-full"]');
    console.log(`📊 Found ${groupAvatars.length} avatars in group`);
    
    for (let i = 0; i < groupAvatars.length; i++) {
      const avatar = groupAvatars[i];
      const style = await avatar.evaluate(el => el.style.cssText);
      const bg = await avatar.evaluate(el => getComputedStyle(el).backgroundColor);
      const classes = await avatar.evaluate(el => el.className);
      
      console.log(`🔍 Group Avatar ${i + 1}:`);
      console.log('   Classes:', classes.substring(0, 100) + '...');
      console.log('   Inline style:', style);
      console.log('   Computed background:', bg);
    }
    
    // Take screenshots
    await page.screenshot({ path: 'debug-avatar-comparison.png', fullPage: true });
    console.log('📸 Screenshot saved');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
})();