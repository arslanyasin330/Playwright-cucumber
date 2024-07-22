import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  importTestFrom: 'src/fixtures/fixtures.ts',
  paths: ['./src/features/login.feature'],
  require: ['./src/steps/loginSteps.ts'],
});

export default defineConfig({
  testDir,
  reporter: [
    [
      'allure-playwright',
      {
        detail: true,
        outputFolder: 'allure-results',
        suiteTitle: false,
      },
    ],
  ],
  timeout: 60000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
  },

  projects: [
    {
      name: 'Elavator',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
