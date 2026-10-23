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
- **Actual Result:** Both the Username and Password fields displayed red "Required" validation messages. Login was prevented.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-001_LoginAuthentication/TC-003_Empty_Login_Fields.png`

### TC-004: Log Out Successfully

- **Related Scenario:** TS-004
- **Objective:** Verify that a logged-in user can end the session.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Valid login credentials.
- **Steps:**
  1. Log in with valid credentials.
  2. Open the user menu in the top-right corner.
  3. Click **Logout**.
  4. Observe the page displayed.
- **Expected Result:** The user is logged out, and the login page appears.
- **Actual Result:** After clicking Logout, the application returned to the login page.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-001_LoginAuthentication/TC-004_Logout_Success.png`

### TC-005: Access a Protected Page After Logout

- **Related Scenario:** TS-005
- **Objective:** Verify that a logged-out user cannot access a protected page.
- **Preconditions:** The user has logged out of OrangeHRM.
- **Test Data:** Dashboard URL.
- **Steps:**
  1. Log in and copy the Dashboard URL.
  2. Log out.
  3. Paste the Dashboard URL into the browser address bar.
  4. Press Enter and observe the result.
- **Expected Result:** OrangeHRM redirects the user to the login page or prevents access to the Dashboard.
- **Actual Result:** After logout, accessing the Dashboard URL returned the user to the OrangeHRM login page.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-001_LoginAuthentication/TC-005_Protected_Page_After_Logout.png`

## 2. Admin User Management

### TC-006: Open Admin User Management
- **Related Scenario:** TS-006
- **Objective:** Verify that the Admin module opens successfully for an authorized user.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Valid login credentials.
- **Steps:**
  1. Log in to OrangeHRM.
  2. Click **Admin** in the left navigation menu.
  3. Wait for the page to load.
- **Expected Result:** The Admin page opens and displays the user management interface.
- **Actual Result:** The Admin page opened successfully and displayed the System Users search filters, user records, and management actions.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-002_Admin/TC-006_Admin_Page.png`

### TC-007: Review the User Table and Available Controls
- **Related Scenario:** TS-007
- **Objective:** Verify that the Admin module displays the system users list.
- **Preconditions:** The user is logged in and has opened the Admin module.
- **Test Data:** Existing system user records.
- **Steps:**
  1. Open the Admin module.
  2. Locate the System Users table.
  3. Review the displayed columns and user records.
- **Expected Result:** The system users table displays user records with usernames, user roles, employee names, statuses, and available actions.
- **Actual Result:** The System Users table displayed user records with usernames, roles, employee names, statuses, and available Edit and Delete actions.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-002_Admin/TC-007_User_List.png`

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
- **Actual Result:** The Edit User page displayed the selected user's role, employee name, status, and username.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-002_Admin/TC-008_Individual_User_Record.png`

### TC-009: Review User Actions and List Navigation
- **Related Scenario:** TS-009
- **Objective:** Verify that the system users list displays Edit and Delete actions.
- **Preconditions:** The user is logged in and has opened Admin → User Management.
- **Test Data:** Existing system user records.
- **Steps:**
  1. Open the Admin module.
  2. Review the System Users table.
  3. Check the Actions column for existing users.
  4. Confirm that Edit and Delete icons are displayed.
- **Expected Result:** Edit and Delete actions are visible for applicable user records.
- **Actual Result:** The Actions column displayed Edit and Delete icons for multiple system user records.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-002_Admin/TC-009_Available_User_Actions.png`

### TC-010: Clear User-Management Filters
- **Related Scenario:** TS-010
- **Objective:** Verify that the Reset button clears the user search filters.
- **Preconditions:** The user is logged in and has opened Admin → User Management.
- **Test Data:** Username, User Role, and Status filter values.
- **Steps:**
  1. Enter a username in the Username filter.
  2. Select a User Role and Status, if available.
  3. Click **Reset**.
  4. Check the filter fields.
- **Expected Result:** The search fields are cleared or returned to their default selections.
- **Actual Result:** The search fields were empty, and the User Role and Status dropdowns returned to `-- Select --`. The System Users list was displayed again.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-002_Admin/TC-010_Reset_User_Filters.png`

## 3. User Search and Filtering

### TC-011: Search for a User by Exact Username
- **Related Scenario:** TS-011
- **Objective:** Verify that searching by an exact username returns the matching user.
- **Preconditions:** The user is logged in and has opened Admin → User Management.
- **Test Data:** Username: `Admin`
- **Steps:**
  1. Enter `Admin` in the Username field.
  2. Click **Search**.
  3. Review the returned records.
- **Expected Result:** The results match the entered username according to the application's search behavior.
- **Actual Result:** The search returned one record with the username `Admin`.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-003_Admin/TC-011_Search_Exact_Username.png`

### TC-012: Search Using a Partial Username
- **Related Scenario:** TS-012
- **Objective:** Check how the application handles a partial username search.
- **Preconditions:** The user is logged in and has opened Admin → User Management.
- **Test Data:** Partial username: `priya`
- **Steps:**
  1. Open Admin → User Management.
  2. Enter `priya` in the Username field.
  3. Click **Search**.
  4. Observe the returned records.
- **Expected Result:** Record whether the application returns matching usernames or no results for the partial search term.
- **Actual Result:** The application displayed "No Records Found" for the search term `priya`.
- **Status:** PASS 
- **Evidence:** `Test_Evidence/TS-003_Admin/TC-012_Search_Partial_Username.png`

### TC-013: Search for a Nonexistent Username
- **Related Scenario:** TS-013
- **Objective:** Verify that searching for a nonexistent username returns no matching records.
- **Preconditions:** The user is logged in and has opened Admin → User Management.
- **Test Data:** `qa_user_not_found_987`
- **Steps:**
  1. Open Admin → User Management.
  2. Enter `qa_user_not_found_987` in the Username field.
  3. Click **Search**.
  4. Observe the results.
- **Expected Result:** The application displays no matching records.
- **Actual Result:** The application displayed "No Records Found" for the entered username.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-003_Admin/TC-013_Search_Nonexistent_Username.png`

### TC-014: Search with No Filters Applied
- **Related Scenario:** TS-014
- **Objective:** Verify the results when a search is performed without entering any filters.
- **Preconditions:** The user is logged in and has opened Admin → User Management.
- **Test Data:** All search filters left empty or at their default selections.
- **Steps:**
  1. Click **Reset** to clear all filters.
  2. Leave every filter empty or at its default selection.
  3. Click **Search**.
  4. Observe the results.
- **Expected Result:** The application displays available system user records without applying any filters.
- **Actual Result:** The application displayed 29 records with all search filters empty.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-002_Admin/TC-014_Search_Empty_Filters.png`

### TC-015: Filter Users by Role
- **Related Scenario:** TS-015
- **Objective:** Verify that filtering by the Admin role displays only users assigned to that role.
- **Preconditions:** The user is logged in and can access Admin > User Management.
- **Test Data:** User Role = Admin.
- **Steps:**
  1. Open Admin > User Management.
  2. Select **Admin** in the User Role filter.
  3. Click **Search**.
  4. Check the User Role column for all displayed records.
- **Expected Result:** Only users with the Admin role are displayed.
- **Actual Result:** The search returned 8 records. The displayed records had the Admin role.
- **Status:** PASS 
- **Evidence:** `Test_Evidence/TS-003_SearchFilter/TC-015_Admin_Role_Filter.png`

### TC-016: Filter Users by Status
- **Related Scenario:** TS-016
- **Objective:** Verify that filtering by account status displays only users with the selected status.
- **Preconditions:** The user is logged in and can access Admin > User Management.
- **Test Data:** Status = Enabled and Disabled.
- **Steps:**
  1. Open Admin > User Management.
  2. Select Enabled in the Status filter and click Search.
  3. Verify that all displayed users have Enabled status.
  4. Select Disabled in the Status filter and click Search.
  5. Verify that all displayed users have Disabled status.
- **Expected Result:** Only users matching the selected account status are displayed.
- **Actual Result:** The Enabled filter returned 28 records, all displaying Enabled status. The Disabled filter returned 1 record, displaying Disabled status.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-003_SearchFilter/TC-016_Account_Status_Filter.png`

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
- **Evidence:** `Test_Evidence/TS-003_SearchFilter/TC-018_Employee_List.png`

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
- **Actual Result:** The Employee List loaded successfully. Search controls and the employee table were visible, with 151 records found.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-004_EmployeeManagement/TC-018_Employee_List.png`

### TC-019: Search for an Existing Employee
- **Related Scenario:** TS-019
- **Objective:** Verify that searching for an existing employee returns the correct record.
- **Preconditions:** The user is logged in and the Employee List is accessible.
- **Test Data:** Employee Name: `Ana`.
- **Steps:**
  1. Open PIM → Employee List.
  2. Enter `Ana` in the Employee Name field.
  3. Click **Search**.
  4. Review the search results.
- **Expected Result:** The matching employee is displayed, and the identifying information is correct.
- **Actual Result:** The search returned 1 record. The displayed employee name was Ana Sup, with employee ID 0442.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-004_EmployeeManagement/TC-019_Search_Existing_Employee.png`

### TC-020: Search for a Nonexistent Employee
- **Related Scenario:** TS-020
- **Objective:** Verify that searching for a nonexistent employee returns no unrelated records.
- **Preconditions:** The user is logged in and the Employee List is accessible.
- **Test Data:** Employee Name: `employeeNotFound987`.
- **Steps:**
  1. Open PIM → Employee List.
  2. Enter `employeeNotFound987` in the Employee Name field.
  3. Click **Search**.
  4. Review the search results.
- **Expected Result:** No matching employee is returned, and the application handles the empty-results state correctly.
- **Actual Result:** The application displayed **No Records Found** and returned no employee records.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-004_EmployeeManagement/TC-020_Search_Nonexistent_Employee.png`

## 4. Employee Management (PIM) — Continued

### TC-021: Filter Employees
- **Related Scenario:** TS-021
- **Objective:** Verify that filtering employees by employment status returns matching records.
- **Preconditions:** The user is logged in and the Employee List is accessible.
- **Test Data:** Employment Status: `Full-Time Contract`.
- **Steps:**
  1. Open PIM → Employee List.
  2. Leave the other search fields empty.
  3. Select `Full-Time Contract` in the Employment Status dropdown.
  4. Click **Search**.
  5. Review the search results.
- **Expected Result:** Only employees matching the selected employment status are displayed.
- **Actual Result:** The search returned 1 record. Employee Rebecca Harmony (ID 0042) was displayed with the status Full-Time Contract.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-004_EmployeeManagement/TC-021_Employee_Filters.png`

### TC-022: Open an Employee Record
- **Related Scenario:** TS-022
- **Objective:** Verify that a user can open an employee record and view the employee's information.
- **Preconditions:** The user is logged in and the Employee List is accessible.
- **Test Data:** Employee Name: Ashley West; Employee ID: 0411.
- **Steps:**
  1. Open PIM → Employee List.
  2. Find the employee Ashley West.
  3. Click the **Edit** icon beside the employee's record.
  4. Verify that the employee details page opens.
  5. Review the displayed personal information.
- **Expected Result:** The employee details page opens and displays the correct employee name, ID, and personal information.
- **Actual Result:** The employee details page opened successfully. Ashley West and Employee ID 0411 were displayed in the Personal Details section.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-004_EmployeeManagement/TC-022_Open_Employee_Record.png`

### TC-023: Submit the Add Employee Form with Required Information Missing
- **Related Scenario:** TS-023
- **Objective:** Verify that missing required information prevents an incomplete employee record from being created.
- **Preconditions:** The user is logged in and can access the Add Employee form.
- **Test Data:** Leave the First Name and Last Name fields empty; Employee ID: `0469` (already exists).
- **Steps:**
  1. Open PIM.
  2. Select **Add Employee**.
  3. Leave the First Name and Last Name fields empty.
  4. Click **Save**.
  5. Review the validation messages.
  6. Confirm that no employee record was created.
- **Expected Result:** The application identifies missing required information and prevents an incomplete employee record from being created.
- **Actual Result:** The application displayed required-field messages for First Name and Last Name. It also displayed a separate message indicating that Employee ID `0469` already exists.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-004_EmployeeManagement/TC-023_Missing_Required_Information.png`

## 5. Roles and Permissions

### TC-025: Compare Access Available to Different User Roles

- **Related Scenario:** TS-025
- **Objective:** Identify differences in available pages and actions for Admin and ESS users.
- **Preconditions:** The OrangeHRM demo application is accessible. Admin credentials are available, but separate ESS credentials are not provided.
- **Test Data:** Admin account; ESS account unavailable.
- **Steps:**
  1. Log in using the Admin account.
  2. Record the available navigation items and relevant actions.
  3. Capture a screenshot of the Admin dashboard.
  4. Log out.
  5. Check the public demo login page for ESS credentials.
  6. Record that no ESS credentials are provided and the comparison cannot be completed.
- **Expected Result:** Differences in access between Admin and ESS users can be compared and documented.
- **Actual Result:** The Admin dashboard loaded successfully and displayed navigation items including Admin, PIM, Leave, Time, Recruitment, My Info, Performance, Dashboard, Directory, Maintenance, Claim, and Buzz. The public demo login page provided only Admin credentials, so the ESS comparison could not be completed.
- **Status:** Blocked
- **Evidence:** `Test_Evidence/TS-005_RolesPermissions/TC-025_Admin_Access.png`

### TC-026: Verify Access to a Restricted Page or Function

- **Related Scenario:** TS-026
- **Objective:** Verify that a user without the required permission cannot access a restricted function.
- **Preconditions:** The OrangeHRM demo is accessible. A restricted account is required, but only Admin credentials are available.
- **Test Data:** Restricted account and target page or function.
- **Steps:**
  1. Review the available demo credentials.
  2. Confirm that only Admin credentials are provided.
  3. Record that a restricted account is unavailable.
- **Expected Result:** Users without the required permission cannot access restricted functions.
- **Actual Result:** The test could not be performed because a restricted account was unavailable.
- **Status:** Blocked
- **Evidence:** No additional screenshot required; the credential limitation is documented in TC-025.

## 6. Directory

### TC-027: Open the Directory Page

- **Related Scenario:** TS-027
- **Objective:** Verify that the Directory page loads and displays employee entries.
- **Preconditions:** The user is logged in with access to Directory.
- **Test Data:** Available directory entries.
- **Steps:**
  1. Click Directory in the navigation menu.
  2. Wait for the page to load.
  3. Review the displayed entries and controls.
- **Expected Result:** The page loads without obvious errors and displays employee entries or an appropriate empty state.
- **Actual Result:** The Directory page loaded successfully. The search filters for Employee Name, Job Title, and Location were visible. One employee record, Peter Mac Anderson, was displayed with the job title Chief Financial Officer and location information.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-006_Directory/TC-027_Directory_Page.png`

### TC-028: Search the Directory by Employee Name

- **Related Scenario:** TS-028
- **Objective:** Verify that searching for an existing employee returns the matching directory entry.
- **Preconditions:** The user is logged in, and the Directory page is accessible.
- **Test Data:** Employee Name: `Peter Mac Anderson`

- **Steps:**
  1. Open the Directory page.
  2. Enter `Peter Mac Anderson` in the Employee Name field.
  3. Click Search.
  4. Review the returned results.

- **Expected Result:** The search returns the matching employee entry.
- **Actual Result:** The search returned one matching record for Peter Mac Anderson. The record displayed his job title as Chief Financial Officer and location information.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-006_Directory/TC-027_Search_Directory_Page.png` (Need to work on it later)

### TC-029: Filter Directory by Job Title or Location
- **Related Scenario:** TS-029
- **Objective:** Verify that available job-title and location filters narrow directory results.
- **Preconditions:** The user is logged in, and the Directory page is accessible.
- **Test Data:**
  - Job Title: Chief Financial Officer
  - Location: Texas R&D
- **Steps:**
  1. Open the Directory page.
  2. Select Chief Financial Officer from the Job Title filter.
  3. Click Search and review the results.
  4. Click Reset.
  5. Select Texas R&D from the Location filter.
  6. Click Search and review the results.
- **Expected Result:** Returned employees match the selected job title or location.
- **Actual Result:** Filtering by Chief Financial Officer returned one employee, Peter Mac Anderson. Filtering by Texas R&D returned four employees, all displaying Texas R&D as their location.
- **Status:** PASS
- **Evidence:**
  - `Test_Evidence/TS-006_Directory/TC-029_Directory_JobTitle_Filter.png`
  - `Test_Evidence/TS-006_Directory/TC-029_Directory_Location_Filter.png`

## 7. Dashboard

### TC-030: Open the Dashboard and Review Visible Widgets
- **Related Scenario:** TS-030
- **Objective:** Verify that the Dashboard loads and displays its main widgets.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Admin account.
- **Steps:**
  1. Log in to OrangeHRM.
  2. Click Dashboard in the navigation menu.
  3. Review the visible dashboard widgets.
- **Expected Result:** The Dashboard loads without obvious errors and displays its available widgets.
- **Actual Result:** The Dashboard loaded successfully. Visible widgets included Time at Work, My Actions, Quick Launch, Buzz Latest Posts, Employees on Leave Today, and Employee Distribution by Sub Unit.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-007_Dashboard/TC-030_Dashboard_Widgets.png`

### TC-031: Review Quick Launch Shortcuts
- **Related Scenario:** TS-031
- **Objective:** Verify that the Timesheets shortcut on the Dashboard opens the correct page.
- **Preconditions:** The user is logged in and the Dashboard is accessible.
- **Test Data:** Timesheets shortcut.
- **Steps:**
  1. Open the Dashboard.
  2. Locate the Quick Launch widget.
  3. Click Timesheets.
  4. Verify that the Timesheets page opens.
- **Expected Result:** Clicking Timesheets opens the correct page without obvious errors.
- **Actual Result:** The Timesheets page opened successfully. The page displayed an employee selection field and a Timesheets Pending Action section containing three records.
- **Status:** PASS
- **Evidence:** `Test_Evidence/[your existing Dashboard folder]/TC-031_QuickLaunch_Timesheets.png`

## 8. Leave

### TC-032: Review Available Leave Pages
- **Related Scenario:** TS-032
- **Objective:** Verify that the Leave module opens and displays its available pages and controls.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Admin account.
- **Steps:**
  1. Click Leave in the navigation menu.
  2. Review the available menu options.
  3. Inspect the displayed page and its fields without submitting a request or changing records.
- **Expected Result:** The Leave module opens successfully and displays its available navigation options and page controls.
- **Actual Result:** The Leave module opened successfully. The page displayed Apply, My Leave, Entitlements, Reports, Configure, Leave List, and Assign Leave. The Assign Leave form was visible.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-007_Leave/TC-032_Leave_Module.png`

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
- **Preconditions:** The user is logged in to OrangeHRM and has access to the Leave module.
- **Test Data:** Admin account; leave period: January 1–December 31, 2026.
- **Steps:**
  1. Open the Leave module.
  2. Click Entitlements and select My Entitlements.
  3. Review the displayed entitlement information.
  4. Open Entitlements and select Employee Entitlements.
  5. Review the displayed entitlement information without adding or changing records.
- **Expected Result:** Both pages open successfully and display available entitlement records. If no records are available, the application displays an appropriate message.
- **Actual Result:** Both pages opened successfully. My Entitlements displayed “No Records Found” and a total of 0.00 days. Employee Entitlements also displayed “No Records Found” and a total of 0.00 days for the selected employee and leave type.
- **Status:** PASS
- **Notes:** No entitlement records were available in the demo environment. This result does not confirm a defect.
- **Evidence:**
  - `Test_Evidence/TS-007_Leave/TC-034_My_Entitlements.png`
  - `Test_Evidence/TS-007_Leave/TC-034_Employee_Entitlements.png`

### TC-035: Review Leave Reports and Filters
- **Related Scenario:** TS-035
- **Objective:** Verify that the Leave Reports page displays available reports and supports the available report filters.
- **Preconditions:** The user is logged in to OrangeHRM and has access to the Leave module.
- **Test Data:** Leave period: January 1–December 31, 2026.
- **Steps:**
  1. Open the Leave module.
  2. Click Reports.
  3. Review the available report and its filter fields.
  4. Review the selected leave period.
  5. Click Generate to display the report.
  6. Review the report results.
- **Expected Result:** The report page loads successfully, accepts the selected leave period, and displays the corresponding report results.
- **Actual Result:** The My Leave Entitlements and Usage Report displayed successfully. The selected leave period was January 1–December 31, 2026. The report showed 11 records, and all visible leave entitlement, pending approval, scheduled, taken, and balance values were 0.00 days.
- **Status:** PASS
- **Notes:** The report displayed zero-day values. This alone does not indicate a defect.
- **Evidence:** `Test_Evidence/TS-007_Leave/TC-035_Leave_Entitlements_Report.png`

## 9. Time

### TC-036: Review the Timesheets Page
- **Related Scenario:** TS-036
- **Objective:** Verify that the Timesheets page opens and displays available timesheet records and controls.
- **Preconditions:** The user is logged in to OrangeHRM and has access to the Time module.
- **Test Data:** Existing timesheet records displayed in the demo environment.
- **Steps:**
  1. Click Time in the navigation menu.
  2. Open the Timesheets page.
  3. Review the employee selection field and View button.
  4. Review the Timesheets Pending Action section.
  5. Record the number of displayed records and their timesheet periods.
- **Expected Result:** The Timesheets page loads successfully and displays available records and controls.
- **Actual Result:** The Timesheets page loaded successfully. The employee selection field and View button were displayed. The Timesheets Pending Action section showed 3 records for Rajat Gupta, with periods displayed as 2023-16-01 to 2023-22-01, 2022-15-08 to 2022-21-08, and 2020-14-09 to 2020-20-09.
- **Status:** PASS
- **Notes:** The displayed dates appear unusual because the day values exceed the number of days in those months. This may be a demo-data or display issue and should be verified before reporting it as a defect.
- **Evidence:** `Test_Evidence/TS-008_Time/TC-036_Timesheets_Page.png`

### TC-037: Review the Attendance Page

- **Related Scenario:** TS-037
- **Objective:** Verify that the Attendance page displays attendance records and related information correctly.
- **Preconditions:** The user is logged in to OrangeHRM and has access to the Time module.
- **Test Data:** October 23, 2026.
- **Steps:**
  1. Click Time in the navigation menu.
  2. Open Attendance and select My Records.
  3. Select October 23, 2026, using the date field.
  4. Click View.
  5. Review the displayed attendance records and duration.
- **Expected Result:** The page displays attendance records for the selected date, with the corresponding punch-in and punch-out times and duration.
- **Actual Result:** The page displayed one attendance record for October 23, 2026. The punch-in time was 9:40 PM, the punch-out time was 10:13 PM, and the recorded duration was 0.55 hours. The page showed a total duration of 0.55 hours.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-008_Time/TC-037_Attendance_My_Records.png`

### TC-038: Search or Filter Available Time Records
- **Related Scenario:** TS-038
- **Objective:** Verify that the My Timesheets page displays the appropriate results for different timesheet periods.
- **Preconditions:** The user is logged in to OrangeHRM and has access to the Time module.
- **Test Data:** Two adjacent timesheet periods displayed by the application.
- **Steps:**
  1. Open Time and select Timesheets > My Timesheets.
  2. Review the initially displayed timesheet period and results.
  3. Use the previous-period arrow to display an earlier period.
  4. Review the displayed results and any empty-state message.
- **Expected Result:** The page updates to the selected period and displays available records or an appropriate message when no records exist.
- **Actual Result:** The initial period displayed “No Records Found.” After moving to the previous period, the page displayed “No Timesheets Found.” No timesheet records were available for either period.
- **Status:** PASS
- **Notes:** The application displayed an appropriate empty-state message for both periods. No timesheets were created or modified.
- **Evidence:**
  - `Test_Evidence/TS-008_Time/TC-038_My_Timesheets.png`
  - `Test_Evidence/TS-008_Time/TC-038_My_Timesheets_Previous_Period.png`

### TC-039: Review Time Reports and Project Info
- **Related Scenario:** TS-039
- **Objective:** Verify that time reports display project activity information and respond to the approved-timesheets filter.
- **Preconditions:** The user is logged in to OrangeHRM and has access to the Time module.
- **Test Data:** Project: ACME Ltd - ACME Ltd; project date range displayed on the page.
- **Steps:**
  1. Open Time and select Reports > Project Reports.
  2. Review the selected project, date range, and report results.
  3. Record the displayed activity and total duration.
  4. Enable Only Include Approved Timesheets.
  5. Click View and compare the results.
- **Expected Result:** The report displays matching project activity records and updates according to the selected filter.
- **Actual Result:** With the approval filter disabled, the report displayed one activity, “Handling insurance-related issues,” with 0.00 hours. After enabling the filter and clicking View, the report displayed “No Records Found,” with a total duration of 0.00 hours.
- **Status:** PASS
- **Notes:** The displayed results changed when the approved-timesheets filter was enabled. No records were modified.
- **Evidence:**
  - `Test_Evidence/TS-008_Time/TC-039_Project_Report.png`
  - `Test_Evidence/TS-008_Time/TC-039_Project_Report_Approved_Only.png`

## 10. Recruitment

### TC-040: Open the Candidates Page
- **Related Scenario:** TS-040
- **Objective:** Verify that the Candidates page opens and displays its available controls and candidate records.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Admin account.
- **Steps:**
  1. Click Recruitment in the navigation menu.
  2. Open the Candidates page.
  3. Review the available search fields and filters.
  4. Inspect the candidate list and available actions.
- **Expected Result:** The Candidates page opens successfully and displays search controls, filters, candidate records, and available actions.
- **Actual Result:** The Candidates page opened successfully and displayed search filters for job title, vacancy, hiring manager, status, candidate name, keywords, application date, and application method. The page displayed 79 records and view and delete action icons.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-009_Recruitment/TC-040_Candidates_Page.png`

### TC-041: Search or Filter Candidates
- **Related Scenario:** TS-041
- **Objective:** Verify that candidates can be searched by name.
- **Preconditions:** The user is logged in to OrangeHRM and the Candidates page is accessible.
- **Test Data:** Candidate Name: John Doe.
- **Steps:**
  1. Open Recruitment and select Candidates.
  2. Enter `John Doe` in the Candidate Name field.
  3. Click Search.
  4. Review the search results.
- **Expected Result:** The system displays candidates matching the entered name.
- **Actual Result:** The search returned one record for John Doe, applying for Senior QA Lead. The candidate's status was Shortlisted.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-009_Recruitment/TC-041_Search_Candidates.png`

### TC-042: Open the Vacancies Page
- **Related Scenario:** TS-042
- **Objective:** Verify that the Vacancies page opens and displays available vacancies and search controls.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Admin account.
- **Steps:**
  1. Click Recruitment in the navigation menu.
  2. Open the Vacancies page.
  3. Review the available search filters.
  4. Inspect the vacancy list, job titles, hiring managers, statuses, and available actions.
- **Expected Result:** The Vacancies page opens successfully and displays available vacancies, search filters, and action controls.
- **Actual Result:** The Vacancies page opened successfully and displayed 7 records. The list included vacancy names, job titles, hiring managers, statuses, and edit and delete action icons.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-009_Recruitment/TC-042_Vacancies_Page.png`

### TC-043: Review Candidate Details
- **Related Scenario:** TS-043
- **Objective:** Verify that candidate details are displayed correctly.
- **Preconditions:** The user is logged in to OrangeHRM and can access Recruitment.
- **Test Data:** Candidate: John Doe
- **Steps:**
  1. Open the Recruitment module.
  2. Search for John Doe.
  3. Open the candidate's profile using the View icon.
  4. Review the candidate's name, vacancy, application status, email, contact number, and resume.
- **Expected Result:** The candidate profile opens and displays the available candidate information.
- **Actual Result:** John Doe's profile opened successfully. It displayed the name John Doe, vacancy Senior QA Lead, status Shortlisted, email john.doe@example.com, an empty contact number field, and the resume pdf-sample.pdf.
- **Status:** PASS
- **Evidence:** `Test_Evidence/TS-009_Recruitment/TC-043_Candidate_Details.png`

## 11. My Info

### TC-044: Review Personal and Contact Details
- **Related Scenario:** TS-044
- **Objective:** Verify that personal and contact details are displayed.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Logged-in employee profile.
- **Steps:**
  1. Open My Info.
  2. Review the Personal Details section.
  3. Open Contact Details.
  4. Review the address, telephone, and email fields.
- **Expected Result:** The Personal Details and Contact Details pages open successfully and display the available information.
- **Actual Result:** Personal Details displayed employee information, including name, employee ID, nationality, and marital status. Contact Details displayed address, telephone, and email fields.
- **Status:** PASS
- **Evidence:** `TC-044_Personal_Contact_Details.png`

### TC-045: Review Emergency Contacts, Dependents, and Qualifications
- **Related Scenario:** TS-045
- **Objective:** Verify that emergency contacts, dependents, and qualification information are displayed.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Logged-in employee profile.
- **Steps:**
  1. Open My Info.
  2. Open Emergency Contacts and review the displayed information.
  3. Open Dependents and review the displayed information.
  4. Open Qualifications and review work experience and education records.
- **Expected Result:** All three sections open successfully and display available information or an appropriate message when no records exist.
- **Actual Result:** Emergency Contacts and Dependents displayed “No Records Found.” Qualifications displayed one work experience record and one education record.
- **Status:** PASS
- **Evidence:**
  - `TC-045_Emergency_Contacts.png`
  - `TC-045_Dependents.png`
  - `TC-045_Qualifications.png`

### TC-046: Review Job and Salary Information
- **Related Scenario:** TS-046
- **Objective:** Verify that job and salary information is displayed in the employee profile.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Logged-in employee profile.
- **Steps:**
  1. Open My Info.
  2. Open the Job section.
  3. Review the job details and employment status.
  4. Open the Salary section.
  5. Review the salary components and available information.
- **Expected Result:** The Job and Salary sections open successfully and display available information or an appropriate message when no records exist.
- **Actual Result:** The Job section displayed the joining date, job title, job category, sub-unit, location, and employment status. The Salary section displayed “No Records Found” for salary components and attachments.
- **Status:** PASS
- **Evidence:**
  - `TC-046_Job_Information.png`
  - `TC-046_Salary_Information.png`

## 12. Performance

### TC-047: Review Manage Reviews and Available Filters
- **Related Scenario:** TS-047
- **Objective:** Verify that the Manage Reviews page opens and displays available review filters and results.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Default filter values.
- **Steps:**
  1. Open Performance.
  2. Navigate to Manage Reviews.
  3. Review the available filters.
  4. Review the results table.
- **Expected Result:** The Manage Reviews page opens and displays available filters and review records, or an appropriate message when no records are available.
- **Actual Result:** The page opened successfully and displayed filters for Employee Name, Job Title, Sub Unit, Include, Review Status, From Date, and To Date. The results section displayed “No Records Found.”
- **Status:** PASS
- **Evidence:**
  - `TC-047_Manage_Reviews.png`

### TC-048: Review My Trackers and Employee Trackers
- **Related Scenario:** TS-048
- **Objective:** Verify that the My Trackers and Employee Trackers pages display available performance tracker information.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Admin account and available tracker records.
- **Steps:**
  1. Open Performance.
  2. Select My Trackers.
  3. Review the tracker list, dates, and available actions.
  4. Select Employee Trackers.
  5. Review the employee search filters and displayed tracker records.
- **Expected Result:** Both pages open successfully and display available tracker information and controls.
- **Actual Result:** My Trackers displayed one record, “Tracker for paul,” with an added date of 2022-04-08. Employee Trackers displayed one record for manda Gupta associated with “Tracker for paul,” with an added date of 2022-04-08. The employee search field and Include filter were also available.
- **Status:** PASS
- **Evidence:**
  - `TC-048_My_Trackers.png`
  - `TC-048_Employee_Trackers.png`

### TC-049: Review Performance Configuration Options
- **Related Scenario:** TS-049
- **Objective:** Verify that Performance configuration pages display available settings and records.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Admin account and existing configuration records.
- **Steps:**
  1. Open Performance.
  2. Select Configure.
  3. Review the Key Performance Indicators section and its search controls.
  4. Review the available KPI records and displayed actions.
  5. Review the Performance Trackers section and its search controls.
  6. Inspect the displayed tracker record and available actions without making changes.
- **Expected Result:** The configuration pages open successfully and display available settings, records, and controls.
- **Actual Result:** The KPI page displayed 51 records and a Job Title filter. The Performance Trackers page displayed one record for manda Gupta associated with “Tracker for paul,” along with an employee search field and available actions.
- **Status:** PASS
- **Evidence:**
  - `TC-049_Performance_Configuration.png`
  - `TC-049_Performance_Trackers.png`

## 13. Maintenance

### TC-050: Verify Authorization for Maintenance
- **Related Scenario:** TS-050
- **Objective:** Verify access to Maintenance features and identify available authorization controls.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** None.
- **Steps:**
  1. Open Maintenance.
  2. Review the available Maintenance options.
  3. Open Purge Records.
  4. Inspect the available fields and controls without submitting a search or deleting records.
- **Expected Result:** The Maintenance page and its available controls are displayed according to the user's permissions.
- **Actual Result:** The Purge Records page opened successfully and displayed a required Past Employee field and a Search button. No records were searched for or deleted.
- **Status:** PASS
- **Evidence:** `TC-050_Maintenance_Access.png`

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
- **Objective:** Verify that My Claims and Employee Claims pages display claim records and available filters.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Existing sample claim records.
- **Steps:**
  1. Open the Claim module.
  2. Open My Claims and review the available filters and displayed records.
  3. Open Employee Claims and review the available filters and displayed records.
  4. Do not modify, approve, or reject any claims.
- **Expected Result:** Both pages open successfully and display available claim records and filtering controls.
- **Actual Result:** My Claims displayed 5 records. Employee Claims displayed 6 records. Both pages showed filtering controls and View Details buttons.
- **Status:** PASS
- **Evidence:**
  - `TC-052_My_Claims.png`
  - `TC-052_Employee_Claims.png`

### TC-053: Review Assign Claim and Claim Configuration
- **Related Scenario:** TS-053
- **Objective:** Verify that the Assign Claim and Claim Configuration pages display their available fields, options, and controls.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Existing claim events and configuration options.
- **Steps:**
  1. Open the Claim module.
  2. Open Assign Claim and review the available fields and controls.
  3. Open Configuration and review the available events and their statuses.
  4. Do not assign a claim or create, edit, or delete configuration records.
- **Expected Result:** Both pages open successfully and display their available fields, options, and controls.
- **Actual Result:** The Assign Claim page displayed the Employee Name, Event, Currency, and Remarks fields. The Configuration page displayed three events: Accommodation, Medical Reimbursement, and Travel Allowance. All three events showed Active status.
- **Status:** PASS
- **Evidence:**
  - `TC-053_Assign_Claim.png`
  - `TC-053_Claim_Configuration.png`

## 15. Buzz

### TC-054: Open the Buzz Feed and Review Sorting Options
- **Related Scenario:** TS-054
- **Objective:** Verify that the Buzz Newsfeed opens and its post-sorting options work.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** Existing sample Buzz posts.
- **Steps:**
  1. Open the Buzz module.
  2. Review the displayed posts.
  3. Select Most Recent Posts and review the results.
  4. Select Most Liked Posts and review the results.
  5. Select Most Commented Posts and review the results.
- **Expected Result:** The Buzz Newsfeed opens, and each sorting option displays posts according to the selected option.
- **Actual Result:** The Buzz Newsfeed opened successfully. All three sorting options were available and selectable. The displayed posts changed when switching between sorting options.
- **Status:** PASS
- **Evidence:**
  - `TC-054_Most_Recent_Posts.png`
  - `TC-054_Most_Liked_Posts.png`
  - `TC-054_Most_Commented_Posts.png`

### TC-055: Review Post Creation and Media Attachment
- **Related Scenario:** TS-055
- **Objective:** Verify that the Buzz module provides options for creating posts and attaching photos or videos.
- **Preconditions:** The user is logged in to OrangeHRM.
- **Test Data:** No test data required.
- **Steps:**
  1. Open the Buzz module.
  2. Click **Share Photos**.
  3. Review the photo-sharing form and available controls.
  4. Close the form without uploading or sharing anything.
  5. Click **Share Video**.
  6. Review the video-sharing form and available controls.
  7. Close the form without entering a URL or sharing anything.
- **Expected Result:** The photo-sharing form provides a text field, photo attachment area, and Share button. The video-sharing form provides a text field, video URL field, and Share button.
- **Actual Result:** The Share Photos form opened and displayed a text field, an Add Photos area, and a Share button. The Share Video form opened and displayed a text field, a Video URL field, and a Share button.
- **Status:** PASS
- **Evidence:**
  - `TC-055_Share_Photos.png`
  - `TC-055_Share_Video.png`