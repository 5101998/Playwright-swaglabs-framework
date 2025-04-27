import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class CartPage extends BasePage {
  async verifyProductInCart(productName: string) {
    await expect(this.page.locator('.cart_item')).toContainText(productName);
  }

  async removeItem(productName: string) {
    await this.page.locator(`text=${productName}`).locator('xpath=../..').locator('button').click();
  }

  async clickCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}