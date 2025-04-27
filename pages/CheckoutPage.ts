import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class CheckoutPage extends BasePage {
  async fillCheckoutForm(firstName: string, lastName: string, zip: string) {
    await this.page.fill('[data-test="firstName"]', firstName);
    await this.page.fill('[data-test="lastName"]', lastName);
    await this.page.fill('[data-test="postalCode"]', zip);
    await this.page.click('[data-test="continue"]');
  }

  async finishCheckout() {
    await this.page.click('[data-test="finish"]');
  }

  async verifyOrderCompletion() {
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
  }
}
