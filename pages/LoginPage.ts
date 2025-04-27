import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
  usernameInput = this.page.locator('#user-name');
  passwordInput = this.page.locator('#password');
  loginButton = this.page.locator('#login-button');
  errorMessage = this.page.locator('[data-test="error"]');

  async goto() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertErrorMessage(message: string) {
    await expect(this.errorMessage).toHaveText(message);
  }
}
