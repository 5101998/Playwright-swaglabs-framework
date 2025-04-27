import { test, expect } from '@playwright/test';

test('Visual snapshot of login page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveScreenshot('login-page.png');
});