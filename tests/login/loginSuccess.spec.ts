import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ENV } from '../../config/env';

test('Successful login redirects to inventory', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(ENV.users.standard_user.username, ENV.users.standard_user.password);
  await loginPage.validateUrlContains('inventory.html');
});