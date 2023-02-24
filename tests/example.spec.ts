import { expect, test } from '@playwright/test';

/**
 * These are some demo tests to showcase Playwright.
 * You can run the tests by running `pnpm test`.
 * If you need more info about writing tests, please visit {@link https://playwright.dev/}.
 */
test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
