
import { test, expect } from '@playwright/test';
import LoginPage from "../Pages/LoginPage" ; 
import HomePage from "../Pages/HomePage" ; 
import { testData } from '../data/testData';

test('Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(testData.username, testData.password);

  // Add assertions as needed

  await page.waitForTimeout(3000)

  // Home
  const home =  new HomePage(page);
  await home.addProductToCart(testData.productName)

  await page.waitForTimeout(3000)
  
  await home.gotoCart()

});
