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

  const resultsTable = page.getByRole('table');

  await expect(resultsTable).toContainText('Admin');
  await expect(resultsTable.getByRole('row').nth(1)).toBeVisible();
});

test('TC-019: Filter users by Admin role', async ({ page }) => {
  await page.getByRole('link', { name: 'Admin' }).click();

  await expect(
    page.getByRole('heading', { name: 'System Users' })
  ).toBeVisible();

  // Locate the User Role field specifically.
  const userRoleField = page
    .locator('.oxd-input-group')
    .filter({ has: page.getByText('User Role', { exact: true }) });

  // Open the User Role dropdown.
  await userRoleField.locator('.oxd-select-text').click();

  // Select Admin.
  await page.locator('.oxd-select-dropdown')
    .getByText('Admin', { exact: true })
    .click();

  // Apply the filter.
  await page.getByRole('button', { name: 'Search' }).click();

  // Verify that the search results contain users.
  const resultsTable = page.getByRole('table');

  await expect(resultsTable).toContainText('Admin', {
    timeout: 10000,
  });

  // Verify that all returned users have the Admin role.
  const resultRows = page.locator('.oxd-table-body .oxd-table-row');

  await expect.poll(
    async () => {
      const rowCount = await resultRows.count();

      if (rowCount === 0) {
        return false;
      }

      for (let i = 0; i < rowCount; i++) {
        const role = await resultRows
          .nth(i)
          .locator('.oxd-table-cell')
          .nth(2)
          .innerText();

        if (role.trim() !== 'Admin') {
          return false;
        }
      }

      return true;
    },
    { timeout: 15000 }
  ).toBe(true);
});