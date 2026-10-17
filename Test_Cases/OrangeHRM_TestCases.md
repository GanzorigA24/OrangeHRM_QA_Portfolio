# OrangeHRM Detailed Test Cases

**Application:** OrangeHRM Open Source Demo  
**URL:** https://opensource-demo.orangehrmlive.com/  
**Environment:** Windows, Google Chrome  
**Testing Type:** Manual Functional Testing  
**Test Status:** New execution cycle — tests not yet executed

## 1. Login and Authentication

### TC-001: Log In with Valid Credentials
- **Related Scenario:** TS-001
- **Objective:** Verify that valid credentials allow a user to log in.
- **Preconditions:** The login page is accessible, and valid test credentials are available.
- **Test Data:** Valid username and password.
- **Steps:**
  1. Open the OrangeHRM login page.
  2. Enter a valid username and password.
  3. Click **Login**.
- **Expected Result:** The user logs in successfully and reaches the Dashboard.
- **Actual Result:** The user logged in successfully and the OrangeHRM Dashboard appeared.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-001_LoginAuthentication/TC-001_Login_Success.png`

### TC-002: Log In with Invalid Credentials
- **Related Scenario:** TS-002
- **Objective:** Verify that invalid credentials are rejected.
- **Preconditions:** The login page is accessible.
- **Test Data:** An invalid username and password.
- **Steps:**
  1. Open the login page.
  2. Enter an invalid username and password.
  3. Click **Login**.
  4. Observe the response.
- **Expected Result:** Login is rejected, and an appropriate error message appears.
- **Actual Result:** The application rejected the login attempt and displayed the error message "Invalid credentials."
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-001_LoginAuthentication/TC-002_Invalid_Username.png`

### TC-003: Submit Login with Required Fields Empty
- **Related Scenario:** TS-003
- **Objective:** Verify required-field validation when credentials are missing.
- **Preconditions:** The login page is accessible.
- **Test Data:** Empty username and password fields.
- **Steps:**
  1. Open the login page.
  2. Leave both fields empty.
  3. Click **Login**.
  4. Observe the validation messages.
- **Expected Result:** Required-field messages appear, and login is prevented.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-001_LoginAuthentication/`

### TC-004: Log Out Successfully
- **Related Scenario:** TS-004
- **Objective:** Verify that a logged-in user can end the session.
- **Preconditions:** The user is logged in successfully.
- **Test Data:** Valid test account.
- **Steps:**
  1. Open the user menu.
  2. Click **Logout**.
  3. Observe the page displayed.
- **Expected Result:** The session ends, and the login page appears.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-001_LoginAuthentication/`

### TC-005: Access a Protected Page After Logout
- **Related Scenario:** TS-005
- **Objective:** Verify that protected content cannot be accessed after logout.
- **Preconditions:** The user can log in and access a protected page.
- **Test Data:** URL of a protected page.
- **Steps:**
  1. Log in successfully.
  2. Open a protected page and copy its URL.
  3. Log out.
  4. Paste the copied URL into the browser address bar.
  5. Press Enter.
- **Expected Result:** The application redirects to the login page or denies access to protected content.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-001_LoginAuthentication/`

## 2. Admin User Management

### TC-006: Open Admin User Management
- **Related Scenario:** TS-006
- **Objective:** Verify that an authorized user can open Admin User Management.
- **Preconditions:** The user is logged in with Admin permissions.
- **Test Data:** Authorized Admin account.
- **Steps:**
  1. Click **Admin** in the navigation menu.
  2. Wait for the page to load.
  3. Review the page.
- **Expected Result:** The user-management page loads and displays available controls.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-002_Admin/`

### TC-007: Review the User Table and Available Controls
- **Related Scenario:** TS-007
- **Objective:** Verify that the user table, columns, filters, and available actions are displayed.
- **Preconditions:** The Admin User Management page is open.
- **Test Data:** Existing user records.
- **Steps:**
  1. Review the user table.
  2. Check the displayed column headings.
  3. Review the search and filter controls.
  4. Identify the available actions.
- **Expected Result:** The table and available controls are displayed without obvious layout or loading problems.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-002_Admin/`

### TC-008: Open a User Record for Review
- **Related Scenario:** TS-008
- **Objective:** Verify that a selected user record can be opened and reviewed.
- **Preconditions:** The user is logged in with Admin permissions, and a user record is available.
- **Test Data:** An existing user record.
- **Steps:**
  1. Open Admin User Management.
  2. Select an existing user record.
  3. Open its available view or edit form.
  4. Review the displayed information.
  5. Exit without saving changes.
- **Expected Result:** The record information is displayed, and no changes are saved.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-002_Admin/`

### TC-009: Review User Actions and List Navigation
- **Related Scenario:** TS-009
- **Objective:** Identify available user-record actions and pagination controls without modifying shared records.
- **Preconditions:** Admin User Management is open.
- **Test Data:** Existing user records.
- **Steps:**
  1. Review the actions available for a user record.
  2. Identify whether Edit and Delete controls are present.
  3. Review the list navigation and pagination controls.
  4. If multiple pages are available, navigate between them.
  5. Do not save changes or delete records.
- **Expected Result:** Available actions and navigation behavior are documented. If multiple pages are unavailable, record that limitation.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-002_Admin/`

### TC-010: Clear User-Management Filters
- **Related Scenario:** TS-010
- **Objective:** Verify that clearing search filters restores the unfiltered user list.
- **Preconditions:** Admin User Management is open.
- **Test Data:** A filter value that matches an existing user.
- **Steps:**
  1. Enter a value in an available search field.
  2. Click **Search**.
  3. Click **Reset** or the available clear control.
  4. Review the search fields and results.
- **Expected Result:** The filter fields are cleared, and the user list returns to its default state.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-002_Admin/`

## 3. User Search and Filtering

### TC-011: Search for a User by Exact Username
- **Related Scenario:** TS-011
- **Objective:** Verify that an exact username search returns the matching user.
- **Preconditions:** The user is logged in with Admin permissions.
- **Test Data:** An existing username.
- **Steps:**
  1. Open Admin User Management.
  2. Enter the exact username.
  3. Click **Search**.
  4. Review the results.
- **Expected Result:** The matching user is displayed, and the username matches the search value.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-003_SearchFilter/`

### TC-012: Search Using a Partial Username
- **Related Scenario:** TS-012
- **Objective:** Observe whether partial username searches return matching records.
- **Preconditions:** The user is logged in with Admin permissions, and a suitable username exists.
- **Test Data:** Part of an existing username.
- **Steps:**
  1. Open Admin User Management.
  2. Enter part of an existing username.
  3. Click **Search**.
  4. Record the returned results.
- **Expected Result:** The application's actual matching behavior is documented. Do not report a defect unless the expected behavior is established.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-003_SearchFilter/`

### TC-013: Search for a Nonexistent Username
- **Related Scenario:** TS-013
- **Objective:** Verify that a nonexistent username does not return unrelated users.
- **Preconditions:** The user is logged in with Admin permissions.
- **Test Data:** A username that does not exist, such as `qa_user_not_found_987`.
- **Steps:**
  1. Open Admin User Management.
  2. Enter the nonexistent username.
  3. Click **Search**.
  4. Review the results.
- **Expected Result:** No matching user is returned, and the application displays an appropriate empty-results state.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-003_SearchFilter/`

### TC-014: Search with No Filters Applied
- **Related Scenario:** TS-014
- **Objective:** Verify the default results when all optional search filters are empty.
- **Preconditions:** The user is logged in with Admin permissions.
- **Test Data:** All search fields left blank.
- **Steps:**
  1. Open Admin User Management.
  2. Clear all search fields.
  3. Click **Search**.
  4. Review the displayed records.
- **Expected Result:** The application displays its default user-list results without an unexpected error.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-003_SearchFilter/`

### TC-015: Filter Users by Role
- **Related Scenario:** TS-015
- **Objective:** Verify that filtering by a role returns users assigned that role.
- **Preconditions:** The user is logged in with Admin permissions.
- **Test Data:** Admin or ESS role.
- **Steps:**
  1. Open Admin User Management.
  2. Select a role from the **User Role** filter.
  3. Click **Search**.
  4. Review the role of each returned record.
- **Expected Result:** Every returned record matches the selected role.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-003_SearchFilter/`

### TC-016: Filter Users by Status
- **Related Scenario:** TS-016
- **Objective:** Verify that Enabled and Disabled status filters return matching accounts.
- **Preconditions:** The user is logged in with Admin permissions.
- **Test Data:** Enabled status and Disabled status.
- **Steps:**
  1. Open Admin User Management.
  2. Select **Enabled** and click **Search**.
  3. Check the status of the returned records.
  4. Select **Disabled** and click **Search**.
  5. Check the status of the returned records.
- **Expected Result:** Each search returns only records matching the selected status. If no records exist for a status, document that limitation.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-003_SearchFilter/`

### TC-017: Combine Multiple User Filters
- **Related Scenario:** TS-017
- **Objective:** Verify that multiple user filters work together.
- **Preconditions:** The user is logged in with Admin permissions, and suitable user records are available.
- **Test Data:** A role and status combination, such as Admin and Enabled.
- **Steps:**
  1. Open Admin User Management.
  2. Select a role.
  3. Select a status.
  4. Click **Search**.
  5. Review all returned records.
- **Expected Result:** Every returned record matches both selected criteria.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-003_SearchFilter/`

## 4. Employee Management (PIM)

### TC-018: Open the Employee List
- **Related Scenario:** TS-018
- **Objective:** Verify that an authorized user can open the Employee List.
- **Preconditions:** The user is logged in with permission to access PIM.
- **Test Data:** Authorized test account.
- **Steps:**
  1. Click **PIM** in the navigation menu.
  2. Wait for the Employee List page to load.
  3. Review the search controls and employee table.
- **Expected Result:** The Employee List loads and displays available controls and records.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-004_EmployeeManagement/`

### TC-019: Search for an Existing Employee
- **Related Scenario:** TS-019
- **Objective:** Verify that searching for an existing employee returns the correct record.
- **Preconditions:** The Employee List is accessible, and a known employee exists.
- **Test Data:** An existing employee name or ID.
- **Steps:**
  1. Open the Employee List.
  2. Enter the employee name or ID in the appropriate field.
  3. Click **Search**.
  4. Review the results.
- **Expected Result:** The matching employee is displayed, and the identifying information is correct.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-004_EmployeeManagement/`

### TC-020: Search for a Nonexistent Employee
- **Related Scenario:** TS-020
- **Objective:** Verify that searching for a nonexistent employee returns no unrelated records.
- **Preconditions:** The Employee List is accessible.
- **Test Data:** A nonexistent employee name or ID, such as `QA_Employee_Not_Found_987`.
- **Steps:**
  1. Open the Employee List.
  2. Enter the nonexistent employee name or ID.
  3. Click **Search**.
  4. Review the results.
- **Expected Result:** No matching employee is returned, and the application handles the empty-results state correctly.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-004_EmployeeManagement/`

## 4. Employee Management (PIM) — Continued

### TC-021: Use Available Employee Filters
- **Related Scenario:** TS-021
- **Objective:** Verify that available employee filters narrow results correctly.
- **Preconditions:** The Employee List is accessible.
- **Test Data:** A supported filter value matching an existing employee.
- **Steps:**
  1. Open the Employee List.
  2. Select or enter a supported filter value.
  3. Click **Search**.
  4. Check the returned records against the selected criteria.
- **Expected Result:** Returned employees match the selected filter. Document unavailable filters as limitations.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-004_EmployeeManagement/`

### TC-022: Open an Employee Record
- **Related Scenario:** TS-022
- **Objective:** Verify that an employee record can be opened and reviewed.
- **Preconditions:** The Employee List is accessible, and an existing employee is available.
- **Test Data:** An existing employee record.
- **Steps:**
  1. Open the Employee List.
  2. Search for an existing employee.
  3. Open the matching record.
  4. Review the displayed details.
  5. Exit without saving changes.
- **Expected Result:** The selected employee's details are displayed, and no unintended changes are made.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-004_EmployeeManagement/`

### TC-023: Review Required Fields in the Add Employee Form
- **Related Scenario:** TS-023
- **Objective:** Identify required fields and their visible indicators.
- **Preconditions:** The user has permission to access the Add Employee form.
- **Test Data:** Add Employee form.
- **Steps:**
  1. Open PIM.
  2. Select **Add Employee**.
  3. Review the visible fields and required-field indicators.
  4. Record the fields marked as required.
  5. Exit without saving.
- **Expected Result:** Required fields are identified and documented without creating an employee record.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-004_EmployeeManagement/`

### TC-024: Submit the Add Employee Form with Required Information Missing
- **Related Scenario:** TS-024
- **Objective:** Verify that missing required information prevents an incomplete employee record from being created.
- **Preconditions:** The Add Employee form is accessible, and testing can be performed safely.
- **Test Data:** Leave a confirmed required field empty.
- **Steps:**
  1. Open the Add Employee form.
  2. Leave a required field empty.
  3. Click **Save** only if it is safe to test.
  4. Review the validation messages.
  5. Confirm that no unintended record was created.
- **Expected Result:** The application identifies the missing information and prevents an incomplete record from being created.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-004_EmployeeManagement/`

## 5. Roles and Permissions

### TC-025: Compare Access Available to Different User Roles
- **Related Scenario:** TS-025
- **Objective:** Identify differences in available pages and actions for Admin and ESS users.
- **Preconditions:** Suitable authorized accounts for different roles are available.
- **Test Data:** Admin and ESS test accounts.
- **Steps:**
  1. Log in using the Admin account.
  2. Record the available navigation items and relevant actions.
  3. Log out.
  4. Log in using the ESS account.
  5. Record its available navigation items and actions.
  6. Compare the observations.
- **Expected Result:** Differences in access are documented accurately according to the permissions of each account.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** Save evidence in an appropriate role-and-permissions evidence folder.

### TC-026: Verify Access to a Restricted Page or Function
- **Related Scenario:** TS-026
- **Objective:** Verify that a user without the required permission cannot access a restricted function.
- **Preconditions:** A suitable restricted account and a safely testable restricted function are available.
- **Test Data:** Restricted account and target page or function.
- **Steps:**
  1. Identify a function the test account should not be allowed to use.
  2. Log in using that account.
  3. Attempt to access the function through normal navigation.
  4. If safe and appropriate, try its direct URL.
  5. Record the application's response.
- **Expected Result:** Access is denied, restricted content is not exposed, or the user is redirected appropriately.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** Save evidence in an appropriate role-and-permissions evidence folder.

## 6. Directory

### TC-027: Open the Directory Page
- **Related Scenario:** TS-027
- **Objective:** Verify that the Directory page loads and displays employee entries.
- **Preconditions:** The user is logged in with access to Directory.
- **Test Data:** Available directory entries.
- **Steps:**
  1. Click **Directory** in the navigation menu.
  2. Wait for the page to load.
  3. Review the displayed entries and controls.
- **Expected Result:** The page loads without obvious errors and displays entries or an appropriate empty state.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-005_Directory/`

### TC-028: Search the Directory by Employee Name
- **Related Scenario:** TS-028
- **Objective:** Verify that a name search returns matching directory entries.
- **Preconditions:** The Directory page is accessible, and a suitable employee entry exists.
- **Test Data:** An existing employee name.
- **Steps:**
  1. Open Directory.
  2. Enter an existing employee name in the search field.
  3. Apply the search.
  4. Review the results.
- **Expected Result:** The returned entries match the entered name according to the application's search behavior.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-005_Directory/`

### TC-029: Filter Directory by Job Title or Location
- **Related Scenario:** TS-029
- **Objective:** Verify that available job-title and location filters narrow directory results.
- **Preconditions:** The Directory page is accessible.
- **Test Data:** An available job title or location.
- **Steps:**
  1. Open Directory.
  2. Review the available job-title and location filters.
  3. Select an available filter value.
  4. Apply the filter.
  5. Check the returned entries.
- **Expected Result:** Returned entries match the selected filter. Record any filter that is unavailable.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-005_Directory/`

## 7. Dashboard

### TC-030: Open the Dashboard and Review Visible Widgets
- **Related Scenario:** TS-030
- **Objective:** Verify that the Dashboard and its visible widgets load correctly.
- **Preconditions:** The user is logged in successfully.
- **Test Data:** Dashboard widgets available to the account.
- **Steps:**
  1. Open Dashboard.
  2. Wait for the widgets to load.
  3. Review the visible widgets and their content.
  4. Note any obvious loading, layout, or display errors.
- **Expected Result:** The Dashboard and its visible widgets render without obvious errors.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-006_Dashboard/`

### TC-031: Review Quick Launch Shortcuts
- **Related Scenario:** TS-031
- **Objective:** Verify that available Quick Launch shortcuts navigate to their intended pages.
- **Preconditions:** The user is logged in, and Quick Launch shortcuts are visible.
- **Test Data:** Available Quick Launch shortcuts.
- **Steps:**
  1. Open Dashboard.
  2. Identify the available Quick Launch shortcuts.
  3. Select each shortcut that can be safely tested.
  4. Verify the destination page.
  5. Return to Dashboard between checks if necessary.
- **Expected Result:** Each tested shortcut opens its intended page. Record unavailable or inaccessible shortcuts.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-006_Dashboard/`

## 8. Leave

### TC-032: Review Available Leave Pages
- **Related Scenario:** TS-032
- **Objective:** Verify that accessible Leave pages load correctly.
- **Preconditions:** The user is logged in with appropriate Leave access.
- **Test Data:** Accessible pages such as Apply, My Leave, and Leave List.
- **Steps:**
  1. Open the Leave module.
  2. Identify the available pages.
  3. Open each accessible page.
  4. Review the page content and available controls.
- **Expected Result:** Accessible pages load and display records, controls, or an appropriate empty state.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-007_Leave/`

### TC-033: Review the Leave Application Form and Validation
- **Related Scenario:** TS-033
- **Objective:** Identify the available fields and verify required-field behavior without submitting an unintended request.
- **Preconditions:** The Apply Leave form is accessible.
- **Test Data:** Leave Application form; no request should be submitted.
- **Steps:**
  1. Open the Apply Leave page.
  2. Review the available fields and required indicators.
  3. If safe, leave a confirmed required field empty and trigger validation without submitting a request.
  4. Record the observed validation behavior.
  5. Exit without submitting the leave application.
- **Expected Result:** The available fields and validation behavior are documented, and no unintended leave request is submitted.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-007_Leave/`

### TC-034: Review Leave Records and Entitlements
- **Related Scenario:** TS-034
- **Objective:** Verify that accessible leave records and entitlement information are displayed.
- **Preconditions:** The user has access to the relevant Leave pages.
- **Test Data:** Available leave records and entitlement information.
- **Steps:**
  1. Open the accessible My Leave or Leave List page.
  2. Review available leave records.
  3. Open the entitlement page or section if available.
  4. Record the displayed information and any access limitations.
- **Expected Result:** Available records and entitlement information are displayed correctly for the signed-in account.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-007_Leave/`

### TC-035: Review Leave Reports and Filters
- **Related Scenario:** TS-035
- **Objective:** Verify that accessible Leave reports and their filters can be reviewed.
- **Preconditions:** The user has access to the relevant Leave report pages.
- **Test Data:** Available report options and filter values.
- **Steps:**
  1. Open the Leave reporting page, if available.
  2. Review the available reports and filter controls.
  3. Apply a safe filter if suitable data is available.
  4. Review the displayed results.
- **Expected Result:** Available reports and filters can be accessed and used as supported by the application. Record unavailable options.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-007_Leave/`

## 9. Time

### TC-036: Review the Timesheets Page
- **Related Scenario:** TS-036
- **Objective:** Verify that the Timesheets page loads and displays available options or records.
- **Preconditions:** The user has access to the Time module.
- **Test Data:** Available timesheet records and controls.
- **Steps:**
  1. Open the Time module.
  2. Open the Timesheets page.
  3. Review the available options, records, and controls.
- **Expected Result:** The page loads and displays available options or records, or an appropriate empty state.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-008_Time/`

### TC-037: Review the Attendance Page
- **Related Scenario:** TS-037
- **Objective:** Verify that the Attendance page loads and displays available records or actions.
- **Preconditions:** The user has access to the Time module.
- **Test Data:** Available Attendance options and records.
- **Steps:**
  1. Open the Time module.
  2. Open the Attendance page or an accessible Attendance submenu.
  3. Review available records and actions.
- **Expected Result:** The page loads and displays available records or actions, or an appropriate empty state.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-008_Time/`

### TC-038: Search or Filter Available Time Records
- **Related Scenario:** TS-038
- **Objective:** Verify that available search criteria narrow time records correctly.
- **Preconditions:** A time-record page with search or filter controls is accessible.
- **Test Data:** A supported filter value.
- **Steps:**
  1. Open an accessible time-record page.
  2. Review its search and filter controls.
  3. Enter or select a suitable filter value.
  4. Apply the search or filter.
  5. Check the returned records against the criteria.
- **Expected Result:** Returned records match the selected criteria. Record unavailable filters or insufficient data.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-008_Time/`

### TC-039: Review Time Reports and Project Info
- **Related Scenario:** TS-039
- **Objective:** Verify that accessible Time reports and project-information pages load correctly.
- **Preconditions:** The user has access to the relevant Time pages.
- **Test Data:** Available report and project-information pages.
- **Steps:**
  1. Open the Time module.
  2. Open an available Time report page.
  3. Review its controls and displayed information.
  4. Open Project Info if available.
  5. Review the displayed information without changing or saving anything.
- **Expected Result:** Accessible pages load and display available information. Record pages that cannot be accessed.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-008_Time/`

## 10. Recruitment

### TC-040: Open the Candidates Page
- **Related Scenario:** TS-040
- **Objective:** Verify that the Candidates page loads and displays records or an appropriate empty state.
- **Preconditions:** The user has access to Recruitment.
- **Test Data:** Available candidate records.
- **Steps:**
  1. Open Recruitment.
  2. Open the Candidates page.
  3. Review the available records, search controls, and actions.
- **Expected Result:** The page loads and displays available records or an appropriate empty state.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-009_Recruitment/`

## 10. Recruitment — Continued

### TC-041: Search or Filter Candidates
- **Related Scenario:** TS-041
- **Objective:** Verify that available candidate search and filters return matching results.
- **Preconditions:** The Candidates page is accessible.
- **Test Data:** A supported candidate search value or filter.
- **Steps:**
  1. Open the Candidates page.
  2. Review the available search fields and filters.
  3. Enter a suitable value or select a filter.
  4. Apply the search.
  5. Check the returned records.
- **Expected Result:** Returned candidates match the selected criteria. Record unavailable filters or insufficient data.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-009_Recruitment/`

### TC-042: Open the Vacancies Page
- **Related Scenario:** TS-042
- **Objective:** Verify that the Vacancies page loads and displays records or an appropriate empty state.
- **Preconditions:** The user has access to Recruitment.
- **Test Data:** Available vacancy records.
- **Steps:**
  1. Open Recruitment.
  2. Open the Vacancies page.
  3. Review the available records and controls.
- **Expected Result:** The page loads and displays vacancy records or an appropriate empty state.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-009_Recruitment/`

### TC-043: Review Candidate Details
- **Related Scenario:** TS-043
- **Objective:** Verify that an available candidate record can be opened and reviewed.
- **Preconditions:** The user has access to Recruitment, and a candidate record is available.
- **Test Data:** An existing candidate record.
- **Steps:**
  1. Open the Candidates page.
  2. Select an existing candidate.
  3. Open the candidate's details.
  4. Review the displayed information.
  5. Exit without saving changes.
- **Expected Result:** The candidate details are displayed, and no unintended changes are made.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-009_Recruitment/`

## 11. My Info

### TC-044: Review Personal and Contact Details
- **Related Scenario:** TS-044
- **Objective:** Verify that accessible personal and contact information sections display correctly.
- **Preconditions:** The user is logged in and can access My Info.
- **Test Data:** Personal and contact information available to the account.
- **Steps:**
  1. Open **My Info**.
  2. Review the Personal Details section.
  3. Open the Contact Details section if available.
  4. Review the displayed fields and information.
  5. Do not save any changes.
- **Expected Result:** Accessible sections display the available information without obvious errors, and no changes are made.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-010_MyInfo/`

### TC-045: Review Emergency Contacts, Dependents, and Qualifications
- **Related Scenario:** TS-045
- **Objective:** Verify that accessible sections display available information.
- **Preconditions:** My Info is accessible.
- **Test Data:** Emergency Contacts, Dependents, and Qualifications sections, where available.
- **Steps:**
  1. Open My Info.
  2. Open Emergency Contacts and review the displayed information.
  3. Open Dependents and review the displayed information.
  4. Open Qualifications and review the displayed information.
  5. Do not add, edit, or delete records.
- **Expected Result:** Accessible sections display available information or appropriate empty states. No records are modified.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-010_MyInfo/`

### TC-046: Review Job and Salary Information
- **Related Scenario:** TS-046
- **Objective:** Verify that accessible job and salary information is displayed according to the account's permissions.
- **Preconditions:** My Info is accessible.
- **Test Data:** Job and Salary sections, where available.
- **Steps:**
  1. Open My Info.
  2. Open the Job section if available.
  3. Review the displayed employment information.
  4. Open the Salary section if available.
  5. Record any access restrictions without attempting to bypass them.
- **Expected Result:** Accessible information is displayed correctly. Restricted or unavailable sections are documented without being treated automatically as defects.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-010_MyInfo/`

## 12. Performance

### TC-047: Review Manage Reviews and Available Filters
- **Related Scenario:** TS-047
- **Objective:** Verify that Manage Reviews loads and its available filters can be inspected or used.
- **Preconditions:** The user has access to the Performance module.
- **Test Data:** Available review records and filter values.
- **Steps:**
  1. Open Performance.
  2. Open Manage Reviews.
  3. Review the available filters and controls.
  4. Apply a safe filter if suitable data is available.
  5. Review the results.
- **Expected Result:** The page loads, and available filters behave as expected. Record access limitations or unavailable data.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-011_Performance/`

### TC-048: Review My Trackers and Employee Trackers
- **Related Scenario:** TS-048
- **Objective:** Verify that accessible tracker pages load and display available information.
- **Preconditions:** The user has access to the relevant Performance pages.
- **Test Data:** My Trackers and Employee Trackers, where available.
- **Steps:**
  1. Open Performance.
  2. Open My Trackers if available.
  3. Review the displayed information.
  4. Open Employee Trackers if available.
  5. Review the displayed information without modifying tracker records.
- **Expected Result:** Accessible pages load and display available information or appropriate empty states.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-011_Performance/`

### TC-049: Review Performance Configuration Options
- **Related Scenario:** TS-049
- **Objective:** Identify available Performance settings without changing configuration.
- **Preconditions:** The user has permission to access the relevant configuration pages.
- **Test Data:** Available Performance configuration options.
- **Steps:**
  1. Open Performance.
  2. Review available configuration menus or settings.
  3. Open accessible configuration pages.
  4. Record the available options.
  5. Exit without changing or saving settings.
- **Expected Result:** Available configuration options are documented, and no settings are modified.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-011_Performance/`

## 13. Maintenance

### TC-050: Verify Authorization for Maintenance
- **Related Scenario:** TS-050
- **Objective:** Verify that Maintenance access is restricted appropriately.
- **Preconditions:** The user is logged in with a test account whose Maintenance permissions can be assessed.
- **Test Data:** Authorized or unauthorized account, depending on the available test setup.
- **Steps:**
  1. Log in using the selected test account.
  2. Attempt to open Maintenance through the available navigation.
  3. Observe any access prompt or restriction.
  4. Record the outcome without accessing or deleting sensitive data.
- **Expected Result:** The application applies the expected access restriction or authorization prompt for the account.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-012_Maintenance/`

## 14. Claim

### TC-051: Review the Submit Claim Form and Validation
- **Related Scenario:** TS-051
- **Objective:** Identify available claim fields and required-field validation without submitting a claim.
- **Preconditions:** The user has access to the Claim module and Submit Claim page.
- **Test Data:** Submit Claim form.
- **Steps:**
  1. Open Claim.
  2. Open Submit Claim.
  3. Review the available fields and required indicators.
  4. If safe, trigger required-field validation without submitting a claim.
  5. Exit without submitting the form.
- **Expected Result:** Available fields and validation behavior are documented, and no claim is submitted.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-013_Claim/`

### TC-052: Review My Claims and Employee Claims
- **Related Scenario:** TS-052
- **Objective:** Verify that accessible claim-list pages load and display records or an appropriate empty state.
- **Preconditions:** The user has access to the relevant Claim pages.
- **Test Data:** My Claims and Employee Claims, where available.
- **Steps:**
  1. Open Claim.
  2. Open My Claims if available.
  3. Review the displayed records or empty state.
  4. Open Employee Claims if available.
  5. Review the displayed records or empty state.
- **Expected Result:** Accessible pages load and display available records or appropriate empty states.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-013_Claim/`

### TC-053: Review Assign Claim and Claim Configuration
- **Related Scenario:** TS-053
- **Objective:** Verify that accessible Assign Claim and Claim configuration pages can be inspected safely.
- **Preconditions:** The user has permission to access the relevant Claim pages.
- **Test Data:** Assign Claim and available Claim configuration pages.
- **Steps:**
  1. Open Claim.
  2. Open Assign Claim if available.
  3. Review the displayed fields and controls without assigning a claim.
  4. Open the available Claim configuration pages.
  5. Review the settings without changing or saving anything.
- **Expected Result:** Accessible pages and their controls are documented without modifying shared records or settings.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-013_Claim/`

## 15. Buzz

### TC-054: Open the Buzz Feed and Review Sorting Options
- **Related Scenario:** TS-054
- **Objective:** Verify that the Buzz feed loads and available sorting options organize posts as expected.
- **Preconditions:** The user is logged in and has access to Buzz.
- **Test Data:** Existing Buzz posts and available sorting options.
- **Steps:**
  1. Open Buzz.
  2. Review the feed and its visible posts.
  3. Identify available sorting options.
  4. Apply each available sorting option.
  5. Compare the displayed order with the selected option.
- **Expected Result:** The feed loads, and tested sorting options organize posts according to their displayed labels or behavior.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-014_Buzz/`

### TC-055: Review Post Creation and Media Attachment
- **Related Scenario:** TS-055
- **Objective:** Verify that the post creation interface provides text and media options without publishing content.
- **Preconditions:** The user has access to Buzz and its post creation interface.
- **Test Data:** A draft text entry and a safe test image, if needed.
- **Steps:**
  1. Open Buzz.
  2. Open the post creation interface.
  3. Review the text-entry area and available media attachment controls.
  4. If safe, enter draft text or select a test image.
  5. Do not click Post or otherwise publish content.
  6. Discard the draft if necessary.
- **Expected Result:** Available text and media controls are documented, and no post is published.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-014_Buzz/`

### TC-056: Review Available Post Interactions
- **Related Scenario:** TS-056
- **Objective:** Identify available like, comment, and sharing controls without disrupting other users' content.
- **Preconditions:** The Buzz feed is accessible, and existing posts are visible.
- **Test Data:** An existing post and its available interaction controls.
- **Steps:**
  1. Open Buzz.
  2. Select an existing post for inspection.
  3. Identify available like, comment, and sharing controls.
  4. Record which controls are present and accessible.
  5. Do not publish comments or create unwanted interactions on other users' posts.
- **Expected Result:** Available interaction controls are documented. Any interaction that cannot be tested safely is recorded as not executed.
- **Actual Result:** Not executed yet.
- **Status:** Not Executed
- **Evidence:** `Test_Evidence/TS-014_Buzz/`