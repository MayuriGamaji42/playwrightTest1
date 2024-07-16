
import { Page } from 'playwright';

export default class SignUpPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://demoblaze.com/');
    await this.page.click('#signin2'); 
    await this.page.waitForSelector('#sign-username');
  }

  async signUp(username: string, password: string) {
    await this.page.fill('#sign-username', username);
    await this.page.fill('#sign-password', password);
    await this.page.click('[onclick="register()"]');
  }
}
