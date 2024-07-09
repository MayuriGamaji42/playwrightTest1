import { defineConfig, devices } from '@playwright/test';
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    channel: "chrome",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: 'on-first-retry',
  },
  testMatch: ["**.test.ts"],
  retries: 0,
  reporter: [["dot"], ["json", { outputFile: "test-result.json"}]]
};

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: config.use,

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium', // Specify Chromium browserName
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        browserName: 'firefox', // Specify Firefox browserName
      },
    },
  ],
});
