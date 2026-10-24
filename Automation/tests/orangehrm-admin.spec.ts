import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);
});

test('TC-006: Open Admin User Management', async ({ page }) => {
  await page.getByRole('link', { name: 'Admin' }).click();

  await expect(
    page.getByRole('heading', { name: 'System Users' })
  ).toBeVisible();
});

test('Search for an existing username', async ({ page }) => {
  await page.getByRole('link', { name: 'Admin' }).click();

  await expect(
    page.getByRole('heading', { name: 'System Users' })
  ).toBeVisible();

  await page.getByRole('textbox').nth(1).fill('Admin');
  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.getByRole('table')).toContainText('Admin');
});