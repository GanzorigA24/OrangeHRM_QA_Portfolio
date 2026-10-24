import { test, expect } from '@playwright/test';

test('OrangeHRM login page loads successfully', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  await expect(page).toHaveTitle(/OrangeHRM/);

  await expect(
    page.getByRole('textbox', { name: 'Username' })
  ).toBeVisible();

  await expect(
    page.getByRole('textbox', { name: 'Password' })
  ).toBeVisible();

  await expect(
    page.getByRole('button', { name: 'Login' })
  ).toBeVisible();
});

test('OrangeHRM shows an error for invalid login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  await page.getByRole('textbox', { name: 'Username' }).fill('invalid_user');
  await page.getByRole('textbox', { name: 'Password' }).fill('wrong_password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Invalid credentials')).toBeVisible();
});