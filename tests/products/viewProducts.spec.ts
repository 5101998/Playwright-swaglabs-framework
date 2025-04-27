import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { ENV } from '../../config/env';

test('View list of products after login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  
  await loginPage.goto();
  await loginPage.login(ENV.users.standard_user.username, ENV.users.standard_user.password);
  
  await productsPage.verifyProductsDisplayed();
});
