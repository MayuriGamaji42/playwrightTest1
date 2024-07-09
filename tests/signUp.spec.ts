
import { test, expect } from '@playwright/test';
import  SignUpPage from "../Pages/SignUpPage";
import { testData } from '../data/testData';

test('Sign Up Test', async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  await signUpPage.navigate();
  await signUpPage.signUp(testData.newUsername, testData.newPassword);

  // Add assertions as needed
});
