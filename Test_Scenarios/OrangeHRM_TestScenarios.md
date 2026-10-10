# OrangeHRM Test Scenarios

**Application:** OrangeHRM Open Source Demo  
**URL:** https://opensource-demo.orangehrmlive.com/  
**Environment:** Website accessed through Google Chrome on Windows  
**Testing Approach:** Manual Functional Testing

## 1. Login and Authentication

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-001 | Login with valid credentials | Verify that an authorized user can log in successfully. |
| TS-002 | Login with an invalid username | Verify that an incorrect username is rejected. |
| TS-003 | Login with an invalid password | Verify that an incorrect password is rejected. |
| TS-004 | Submit login with both fields empty | Verify required-field validation. |
| TS-005 | Submit login with the username empty | Verify username validation. |
| TS-006 | Submit login with the password empty | Verify password validation. |
| TS-007 | Log out successfully | Verify that a logged-in user can end their session. |
| TS-008 | Access a protected page after logout | Verify that a logged-out user cannot access protected content through normal navigation. |

## 2. Admin User Management

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-009 | Open the Admin user management page | Verify that an authorized user can access user management. |
| TS-010 | Review the user list | Verify that user records and available controls are displayed. |
| TS-011 | Open or review a user record | Verify that the selected user's information is displayed correctly, if supported. |
| TS-012 | Review available actions for a user record | Identify available actions without changing shared records. |
| TS-013 | Review pagination in the user list | Verify navigation between result pages, if pagination is available. |
| TS-014 | Clear applied user-list filters | Verify that previously applied filters can be cleared and the results return to the expected unfiltered state. |

## 3. Search and Filtering

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-015 | Search using an existing exact username | Verify that a matching user can be found. |
| TS-016 | Search using a partial username | Verify partial-match behavior, if supported. |
| TS-017 | Search using a nonexistent username | Verify that no matching user is returned. |
| TS-018 | Search with username and optional filters left blank | Verify the default search behavior and returned results. |
| TS-019 | Filter users by the Admin role | Verify that results match the selected Admin role. |
| TS-020 | Filter users by the ESS role | Verify that results match the selected ESS role. |
| TS-021 | Filter users by Enabled status | Verify that results match the selected Enabled status. |
| TS-022 | Filter users by Disabled status | Verify that results match the selected Disabled status. |
| TS-023 | Combine username and role filters | Verify that results satisfy both selected criteria. |
| TS-024 | Combine role and status filters | Verify that results satisfy both selected criteria. |
| TS-025 | Clear previous filters and perform a new search | Verify that the new results match only the newly selected criteria. |

## 4. Employee Management

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-026 | Open the employee list | Verify that an authorized user can access the employee list. |
| TS-027 | Search for an existing employee | Verify that the correct employee can be found. |
| TS-028 | Search for a nonexistent employee | Verify that the application handles empty search results correctly. |
| TS-029 | Open an employee record | Verify that the selected employee's details are displayed correctly. |
| TS-030 | Use available employee search filters | Verify that supported employee filters return matching results. |
| TS-031 | Review required fields in an employee form | Identify required fields in the form, if accessible. |
| TS-032 | Submit an employee form with required information missing | Verify form validation without creating or modifying an unintended record. |

## 5. Roles and Permissions

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-033 | Review Admin role information | Verify that the Admin role is displayed correctly in user management. |
| TS-034 | Review ESS role information | Verify that the ESS role is displayed correctly in user management. |
| TS-035 | Compare features available to different authorized roles | Identify differences in navigation or available actions when suitable accounts are available. |
| TS-036 | Attempt to access a restricted function | Verify that unauthorized access is prevented when a suitable account and safe test condition are available. |

## Notes

- These are planned test scenarios, not executed test cases.
- Testing will be performed through the OrangeHRM website in Google Chrome on Windows. Local installation and Docker are not required.
- Each scenario must be checked against the features available on the website before detailed test cases are finalized.
- Unsupported scenarios will be revised or excluded rather than treated as confirmed functionality.
- Do not modify or delete shared demo records unless the action is confirmed to be safe and permitted.
- Actual results and PASS/FAIL statuses will be recorded only after executing the corresponding test cases.
- Report defects only when unexpected behavior is reproducible and supported by evidence.
- Each detailed test case should reference its related scenario ID and include preconditions, test data, steps, expected result, actual result, status, and evidence when applicable.