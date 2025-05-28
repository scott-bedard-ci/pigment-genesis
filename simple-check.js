import puppeteer from 'puppeteer';

(async () => {
  console.log('🔍 Simple check of AvatarGroup...');
  
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:6006/?path=/story/atoms-avatar--basic-group');
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Take a screenshot
    await page.screenshot({ path: 'simple-check.png', fullPage: true });
    console.log('📸 Screenshot saved as simple-check.png');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
})();