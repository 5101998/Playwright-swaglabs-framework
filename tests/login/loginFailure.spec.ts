import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Login fails with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('wrong_user', 'wrong_pass');
  await loginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
});