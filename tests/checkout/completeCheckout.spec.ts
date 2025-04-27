import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { ENV } from '../../config/env';
import { generateRandomZip } from '../../utils/helpers';

test('Complete checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(ENV.users.standard_user.username, ENV.users.standard_user.password);
  
  await productsPage.addProductToCart('Sauce Labs Bike Light');
  await productsPage.gotoCart();
  await cartPage.clickCheckout();
  
  await checkoutPage.fillCheckoutForm('John', 'Doe', generateRandomZip());
  await checkoutPage.finishCheckout();
  await checkoutPage.verifyOrderCompletion();
});
