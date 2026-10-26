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

test('TC-003: Empty login fields show required validation', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Required').first()).toBeVisible();

  await expect(page.getByText('Required').nth(1)).toBeVisible();
});

test('TC-004: User can log out successfully', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Log in.
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify the dashboard opens.
  await expect(page).toHaveURL(/dashboard/);

  // Open the user menu.
  await page.locator('.oxd-userdropdown-tab').click();

  // Log out.
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  // Verify the login page appears.
  await expect(page).toHaveURL(/auth\/login/);
  await expect(
    page.getByRole('button', { name: 'Login' })
  ).toBeVisible();
});

test('TC-005: Protected dashboard redirects after logout', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Log in.
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/dashboard/);

  // Log out.
  await page.locator('.oxd-userdropdown-tab').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

  await expect(page).toHaveURL(/auth\/login/);

  // Try to access the dashboard directly.
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // Verify that access requires authentication.
  await expect(page).toHaveURL(/auth\/login/);
  await expect(
    page.getByRole('button', { name: 'Login' })
  ).toBeVisible();
});