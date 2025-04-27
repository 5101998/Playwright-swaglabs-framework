import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class ProductsPage extends BasePage {
  title = this.page.locator('.title');
  inventoryItems = this.page.locator('.inventory_item');

  async verifyProductsDisplayed() {
    await expect(this.title).toHaveText('Products');
    const itemCount = await this.inventoryItems.count();
    expect(itemCount).toBeGreaterThan(0);
  }

  async addProductToCart(productName: string) {
    await this.page.locator(`text=${productName}`).locator('xpath=../..').locator('button').click();
  }

  async gotoCart() {
    await this.page.locator('.shopping_cart_link').click();
  }

  async sortBy(optionValue: string) {
    await this.page.selectOption('[data-test="product_sort_container"]', optionValue);
  }
}