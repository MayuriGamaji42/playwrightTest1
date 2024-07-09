
import { Page } from 'playwright';

export default class LoginPage 
// exports.LoginPage =
// class LoginPage
{
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://demoblaze.com/');
    await this.page.click('#login2'); // Click on the "Sign in" link
    await this.page.waitForSelector('#loginusername');
  }

  async login(username: string, password: string) {
    await this.page.fill('#login', username);
    await this.page.fill('#loginpassword', password);
    await this.page.click('[onclick="logIn()"]');
  }

  
}
