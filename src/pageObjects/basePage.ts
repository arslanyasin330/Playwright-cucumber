import { Page } from 'playwright';
import { Timeout } from '../utils/enums';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // async waitForReadiness(number = Timeout.SHORT): Promise<void> {
  //   return await this.page.waitForTimeout(number);
  // }
}
