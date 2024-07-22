import { expect } from '@playwright/test';
import { BasePage } from '../basePage';

export class DashboardPage extends BasePage {
  private readonly dashboardHeading = '.oxd-text--h6';

  async verifyDashboardTitle(ExpectedTitle: string): Promise<void> {
    const dashboardLocator = this.page.locator(this.dashboardHeading);
    await expect(dashboardLocator).toHaveText(ExpectedTitle);
  }
}
