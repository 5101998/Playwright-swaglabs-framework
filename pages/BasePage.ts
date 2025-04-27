
import { Page, expect } from '@playwright/test';

export class BasePage {
  constructor(public page: Page) {}

  async validateUrlContains(path: string) {
    await expect(this.page).toHaveURL(new RegExp(path));
  }

  async click(locator: string) {
    await this.page.locator(locator).click();
  }

  async fill(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
  }
}
