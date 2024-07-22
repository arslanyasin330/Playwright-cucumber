import { createBdd, test as base } from 'playwright-bdd';
import { DashboardPage } from '../pageObjects/dashboard/dashboard.page.po';
import { LoginPage } from '../pageObjects/login/login.page.po';

type BaseFixture = {
  login: LoginPage;
  dashboard: DashboardPage;
};

export const test = base.extend<BaseFixture>({
  login: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboard: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});

export const { Given, When, Then } = createBdd(test);
