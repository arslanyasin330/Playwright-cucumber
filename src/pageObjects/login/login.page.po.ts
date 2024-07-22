import { BasePage } from '../basePage';

export class LoginPage extends BasePage {
  private readonly usernameInput = '[name=username]';
  private readonly passwordInput = '[name=password]';
  private readonly loginBtn = '[type=submit]';

  async navigate(url: any): Promise<void> {
    await this.page.goto(url);
  }

  async addUsername(name: string | undefined): Promise<void> {
    if (name === undefined) {
      throw new Error('Username is undefined, skipping input.');
    }
    await this.page.locator(this.usernameInput).fill(name);
  }

  async addPassword(password: any): Promise<void> {
    await this.page.locator(this.passwordInput).fill(password);
  }

  async login(): Promise<void> {
    await this.page.locator(this.loginBtn).click();
  }
}
