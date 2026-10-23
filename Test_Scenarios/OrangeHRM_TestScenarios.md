# OrangeHRM Test Scenarios

**Application:** OrangeHRM Open Source Demo  
**URL:** https://opensource-demo.orangehrmlive.com/  
**Environment:** Google Chrome on Windows  
**Testing Approach:** Manual functional testing  
**Document Scope:** High-level scenarios for the hosted demo application

## 1. Login and Authentication

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-001 | Log in with valid credentials | Verify that a user with valid credentials can log in successfully. |
| TS-002 | Log in with invalid credentials | Verify that invalid credentials are rejected and an appropriate error is displayed. |
| TS-003 | Submit the login form with required fields empty | Verify that required-field validation appears when credentials are missing. |
| TS-004 | Log out successfully | Verify that a logged-in user can end the session. |
| TS-005 | Attempt to access a protected page after logout | Verify that protected content cannot be accessed after the session ends. |

## 2. Admin User Management

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-006 | Open Admin User Management | Verify that an authorized user can open the user-management page. |
| TS-007 | Review the user table and available controls | Verify that user records, columns, filters, and available actions are displayed. |
| TS-008 | Open a user record for review | Verify that the selected user's information is displayed without saving changes. |
| TS-009 | Review user-record actions and list navigation | Identify available Edit, Delete, and pagination controls without modifying shared records. |
| TS-010 | Clear user-management filters | Verify that clearing filters restores the unfiltered user list. |

## 3. User Search and Filtering

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-011 | Search for a user by exact username | Verify that an existing exact username returns the matching record. |
| TS-012 | Search using a partial username | Observe and document whether partial username matching is supported. |
| TS-013 | Search for a nonexistent username | Verify that the application displays an appropriate empty-results state. |
| TS-014 | Search with no filters applied | Verify the user list displayed when optional search filters are empty. |
| TS-015 | Filter users by role | Verify that selecting a role returns records matching that role. |
| TS-016 | Filter users by status | Verify that selecting Enabled or Disabled returns records matching the selected status. |
| TS-017 | Combine multiple user filters | Verify that results satisfy all selected criteria, such as role and status. |

## 4. Employee Management (PIM)

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-018 | Open the Employee List | Verify that an authorized user can open the employee list. |
| TS-019 | Search for an existing employee | Verify that searching for an existing employee returns the correct record. |
| TS-020 | Search for a nonexistent employee | Verify that the application handles empty employee-search results correctly. |
| TS-021 | Use available employee filters | Verify that supported filters narrow the employee list to matching records. |
| TS-022 | Open an employee record | Verify that the selected employee's details are displayed. |
| TS-023 | Submit the Add Employee form with required information missing | Verify that validation prevents an incomplete employee record from being created. |

## 5. Roles and Permissions

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-025 | Compare access available to different user roles | Identify differences between Admin and ESS access when suitable accounts are available. |
| TS-026 | Verify access to a restricted page or function | Verify that a user without the required permission is denied access, when safe and possible to test. |

## 6. Directory

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-027 | Open the Directory page | Verify that the Directory page loads and displays employee entries. |
| TS-028 | Search the Directory by employee name | Verify that a name search returns matching directory entries. |
| TS-029 | Filter Directory entries by job title or location | Verify that available job-title and location filters narrow the results correctly. |

## 7. Dashboard

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-030 | Open the Dashboard and review visible widgets | Verify that the Dashboard loads and its visible widgets render without obvious errors. |
| TS-031 | Review Quick Launch shortcuts | Verify that available shortcuts navigate to their intended pages, where accessible. |

## 8. Leave

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-032 | Review the available Leave pages | Verify that accessible pages, such as Apply, My Leave, and Leave List, load correctly. |
| TS-033 | Review the leave application form and validation | Identify available fields and verify required-field behavior without submitting an unintended request. |
| TS-034 | Review leave records and entitlements | Verify that available leave records and entitlement information are displayed. |
| TS-035 | Review Leave reports and filters | Verify that available report options and filters can be accessed and used, where supported. |

## 9. Time

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-036 | Review the Timesheets page | Verify that the Timesheets page loads and displays available options or records. |
| TS-037 | Review the Attendance page | Verify that the Attendance page loads and displays available records or actions. |
| TS-038 | Search or filter available time records | Verify that available search criteria narrow time records correctly. |
| TS-039 | Review Time reports and Project Info | Verify that accessible report and project-information pages load and display available information. |

## 10. Recruitment

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-040 | Open the Candidates page | Verify that the Candidates page loads and displays available records or an appropriate empty state. |
| TS-041 | Search or filter candidates | Verify that available candidate search and filters return matching results. |
| TS-042 | Open the Vacancies page | Verify that the Vacancies page loads and displays available vacancy records or an appropriate empty state. |
| TS-043 | Review candidate details | Verify that an available candidate record can be opened and viewed without saving changes. |

## 11. My Info

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-044 | Open My Info and review personal and contact details | Verify that accessible personal and contact information sections display correctly. |
| TS-045 | Review emergency contacts, dependents, and qualifications | Verify that accessible sections display available information without making changes. |
| TS-046 | Review job and salary information | Verify that employment and salary information is displayed as permitted for the signed-in account. |

## 12. Performance

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-047 | Open Manage Reviews and review available filters | Verify that the page loads and available review filters can be inspected or used. |
| TS-048 | Review My Trackers and Employee Trackers | Verify that accessible tracker pages load and display available information. |
| TS-049 | Review Performance configuration options | Identify available settings without changing or saving configuration. |

## 13. Maintenance

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-050 | Verify authorization for Maintenance | Verify that access to Maintenance is restricted to authorized users and that the application presents the expected access prompt or restriction. |

## 14. Claim

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-051 | Review the Submit Claim form and validation | Identify available fields and verify required-field validation without submitting a claim. |
| TS-052 | Review My Claims and Employee Claims | Verify that accessible claim-list pages load and display records or an appropriate empty state. |
| TS-053 | Review Assign Claim and Claim configuration | Verify that these pages can be inspected by an authorized user without changing shared data or settings. |

## 15. Buzz

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-054 | Open the Buzz feed and review sorting options | Verify that the feed loads and that available sorting options organize posts as expected. |
| TS-055 | Review the post creation and media attachment interface | Verify that text and media options are available without publishing content. |