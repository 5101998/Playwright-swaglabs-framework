import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { ENV } from '../../config/env';

test('Remove item from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto();
  await loginPage.login(ENV.users.standard_user.username, ENV.users.standard_user.password);
  await productsPage.addProductToCart('Sauce Labs Backpack');
  await productsPage.gotoCart();
  await cartPage.removeItem('Sauce Labs Backpack');
});