import { Given, When, Then } from '../fixtures/fixtures';
import { dashboardTestData } from '../fixtures/dashboardTestData';
import { tags, severity } from 'allure-js-commons';
import { Severity } from 'allure-js-commons';
import * as dotenv from 'dotenv';
dotenv.config();

Given('I navigate to the login page', async ({ login }) => {
  await tags('Login');
  await severity(Severity.CRITICAL);
  await login.navigate(process.env.URL);
});

When('I enter my email and password', async ({ login }) => {
  await login.addUsername(process.env.EMAIL);
  await login.addPassword(process.env.PASSWORD);
});

When('I click the login button', async ({ login }) => {
  await login.login();
});

Then('I should be logged in successfully', async ({ dashboard }) => {
  await dashboard.verifyDashboardTitle(dashboardTestData.dashboardTitle);
});
