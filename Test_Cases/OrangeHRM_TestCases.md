# OrangeHRM Detailed Test Cases

**Application:** OrangeHRM Open Source Demo  

**URL:** https://opensource-demo.orangehrmlive.com/  

**Environment:** Windows, Google Chrome  

**Testing Type:** Manual Functional Testing

## 1. Login and Authentication

### TC-001: Login with Valid Credentials

- **Related Scenario:** TS-001

- **Objective:** Verify that an authorized user can log in successfully.

- **Preconditions:** The login page is accessible, and valid test credentials are available.

- **Test Data:** Valid username and password.

- **Steps:**

  1. Open the OrangeHRM login page.

  2. Enter a valid username.

  3. Enter the corresponding valid password.

  4. Click the Login button.

- **Expected Result:** The user logs in successfully and reaches the appropriate dashboard.

- **Actual Result:** The user logged in successfully and the OrangeHRM Dashboard appeared.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-001_Login_Success.png

### TC-002: Login with an Invalid Username

- **Related Scenario:** TS-002

- **Objective:** Verify that an incorrect username is rejected.

- **Preconditions:** The login page is accessible.

- **Test Data:** Invalid username and a password.

- **Steps:**

  1. Open the login page.

  2. Enter an invalid username.

  3. Enter a password.

  4. Click the Login button.

- **Expected Result:** Login is rejected, and an appropriate error message is displayed.

- **Actual Result:** The application rejected the login attempt and displayed the error message "Invalid credentials."

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-002_Invalid_Username.png

### TC-003: Login with an Invalid Password

- **Related Scenario:** TS-003

- **Objective:** Verify that an incorrect password is rejected.

- **Preconditions:** The login page is accessible, and a valid username is available.

- **Test Data:** Valid username and invalid password.

- **Steps:**

  1. Open the login page.

  2. Enter a valid username.

  3. Enter an incorrect password.

  4. Click the Login button.

- **Expected Result:** Login is rejected, and an appropriate error message is displayed.

- **Actual Result:** The application rejected the login attempt and displayed the error message "Invalid credentials."

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-003_Invalid_Password.png

### TC-004: Submit Login with Both Fields Empty

- **Related Scenario:** TS-004

- **Objective:** Verify required-field validation when both login fields are empty.

- **Preconditions:** The login page is accessible.

- **Test Data:** Empty username and password fields.

- **Steps:**

  1. Open the login page.

  2. Leave both fields empty.

  3. Click the Login button.

- **Expected Result:** Login is not successful, and required-field validation is displayed.

- **Actual Result:** The application displayed "Required" under both the username and password fields when Login was clicked with both fields empty.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-004_Empty_Login_Fields.png

### TC-005: Submit Login with Username Empty

- **Related Scenario:** TS-005

- **Objective:** Verify username validation when the username field is empty.

- **Preconditions:** The login page is accessible.

- **Test Data:** Empty username and a password.

- **Steps:**

  1. Open the login page.

  2. Leave the username field empty.

  3. Enter a password.

  4. Click the Login button.

- **Expected Result:** Login is not successful, and username validation is displayed.

- **Actual Result:** The username field was left empty while a password was entered. The application displayed "Required" under the username field and prevented login.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-005_Empty_Username.png

### TC-006: Submit Login with Password Empty

- **Related Scenario:** TS-006

- **Objective:** Verify password validation when the password field is empty.

- **Preconditions:** The login page is accessible.

- **Test Data:** A username and an empty password field.

- **Steps:**

  1. Open the login page.

  2. Enter a username.

  3. Leave the password field empty.

  4. Click the Login button.

- **Expected Result:** Login is not successful, and password validation is displayed.

- **Actual Result:** The username field contained "Admin" while the password field was left empty. The application displayed "Required" under the password field and prevented login.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-006_Empty_Password.png

### TC-007: Log Out Successfully

- **Related Scenario:** TS-007

- **Objective:** Verify that a logged-in user can end their session.

- **Preconditions:** A user is logged in successfully.

- **Test Data:** Valid test account.

- **Steps:**

  1. Locate and open the user menu.

  2. Click Logout.

- **Expected Result:** The user is logged out and returned to the login page.

- **Actual Result:** After clicking Logout, the application returned to the login page.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-007_Logout_Success.png

### TC-008: Access a Protected Page After Logout

- **Related Scenario:** TS-008

- **Objective:** Verify that a logged-out user cannot access protected content through normal navigation.

- **Preconditions:** The user has logged in and then logged out.

- **Test Data:** URL of a protected page visited before logout.

- **Steps:**

  1. Log in successfully.

  2. Open a protected page and copy its URL.

  3. Log out.

  4. Paste the protected-page URL into the browser address bar.

  5. Press Enter.

- **Expected Result:** The user is redirected to the login page or prevented from viewing protected content.

- **Actual Result:** After logging out, opening the previously accessed protected URL displayed the OrangeHRM login page instead of the protected content.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-008_Protected_Page_After_Logout.png

## 2. Admin User Management

### TC-009: Open the Admin User Management Page

- **Related Scenario:** TS-009

- **Objective:** Verify that an authorized user can access the Admin user management page.

- **Preconditions:** The user is logged in with an account that has Admin permissions.

- **Test Data:** Valid Admin test account.

- **Steps:**

  1. Locate the Admin menu item in the navigation menu.
  2. Click Admin.
  3. Wait for the page to load.

- **Expected Result:** The Admin user management page opens successfully and displays the available user management controls.

- **Actual Result:** The Admin User Management page opened successfully. The search filters, Add button, user table, and 15 records were displayed.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-009_Admin_User_Management_Page.png

### TC-010: Review the User List

- **Related Scenario:** TS-010

- **Objective:** Verify that the user list and its available controls are displayed.

- **Preconditions:** The user is logged in with Admin permissions and has opened the Admin user management page.

- **Test Data:** Existing user records displayed by the application.

- **Steps:**

  1. Open the Admin user management page.

  2. Review the user list.

  3. Check the displayed columns and available controls.

  4. Observe whether the list displays user information consistently.

- **Expected Result:** The user list and its available controls are displayed without unexpected layout or loading problems.

- **Actual Result:** The user list displayed user records with Username, User Role, Employee Name, Status, and Actions columns. The visible rows were consistently aligned, with no obvious layout problems.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-010_User_List.png

### TC-011: Open or Review a User Record

- **Related Scenario:** TS-011

- **Objective:** Verify that the information for a selected user record can be reviewed.

- **Preconditions:** The user is logged in with Admin permissions, and at least one user record is available.

- **Test Data:** An existing user record.

- **Steps:**

  1. Open the Admin user management page.

  2. Select an existing user record.

  3. If a view or edit control is available, open the record details. Do not save any changes.

  4. Review the displayed information.

  5. Leave the record unchanged and exit the page.

- **Expected Result:** The selected user's information is displayed correctly when the application supports opening the record. No unintended changes are made.

- **Actual Result:** The selected user record opened successfully. The Edit User form displayed the User Role, Employee Name, Status, and Username fields. No changes were made or saved.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-011_User_Record_Review.png

### TC-012: Review Available Actions for a User Record

- **Related Scenario:** TS-012

- **Objective:** Identify the actions available for an existing user record without changing shared data.

- **Preconditions:** The user is logged in with Admin permissions and the user list is accessible.

- **Test Data:** An existing user record.

- **Steps:**

  1. Open the Admin user management page.

  2. Locate an existing user record.

  3. Review the actions or controls available for that record.

  4. Do not click any action that could save, delete, disable, or otherwise modify the record.

- **Expected Result:** The available actions can be identified without modifying or deleting the record.

- **Actual Result:** The user list displayed Edit and Delete actions for each user record. The available actions were identified without modifying or deleting any records.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-012_User_Record_Actions.png

### TC-013: Review Pagination in the User List

- **Related Scenario:** TS-013

- **Objective:** Verify that pagination allows navigation between user-list pages when multiple pages are available.

- **Preconditions:** The user is logged in with Admin permissions, and the user list is accessible.

- **Test Data:** Existing user records; multiple result pages must be available to test page navigation.

- **Steps:**

  1. Open the Admin user management page.

  2. Review the pagination controls.

  3. If multiple pages are available, navigate to the next page.

  4. Review the displayed records.

  5. Return to the previous page if possible.

- **Expected Result:** When multiple pages are available, the application navigates between pages and displays the corresponding records. If the current data does not provide multiple pages, record the case as Blocked or Not Applicable according to the project's reporting rules, and explain why it could not be fully tested.

- **Actual Result:** No pagination controls were visible at the bottom of the user list. Navigation between multiple pages could not be tested.

- **Status:** Blocked

- **Evidence:** Test_Evidence/TC-013_User_List_Pagination.png

### TC-014: Clear Applied User-List Filters

- **Related Scenario:** TS-014

- **Objective:** Verify that applied filters can be cleared and the user list returns to the expected unfiltered state.

- **Preconditions:** The user is logged in with Admin permissions, and the user-list search or filter controls are accessible.

- **Test Data:** A filter value that can be applied safely, such as a username search.

- **Steps:**

  1. Open the Admin user management page.

  2. Enter a filter value in an available search field.

  3. Apply the search or filter.

  4. Use the Reset or Clear control, if available.

  5. Review the search fields and displayed results.

- **Expected Result:** The filter fields are cleared, and the results return to the expected unfiltered state when the application supports this behavior.

- **Actual Result:** Entering Admin in the Username filter returned one matching user. After clicking Reset, the Username field was cleared and the list returned to displaying 26 records.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-014_Clear_User_List_Filters.png

## 3. Search and Filtering

### TC-015: Search Using an Existing Exact Username

- **Related Scenario:** TS-015

- **Objective:** Verify that searching for an existing username returns the matching user.

- **Preconditions:** The user is logged in with Admin permissions and the user list is accessible.

- **Test Data:** An existing username from the user list.

- **Steps:**

  1. Open the Admin user management page.

  2. Enter the exact username in the Username search field.

  3. Click Search.

  4. Review the results.

- **Expected Result:** The results display the matching user record.

- **Actual Result:** Searching for the exact username Admin returned one matching user record. The displayed username was Admin, with the Admin role and Enabled status.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-015_Exact_Username_Search.png

### TC-016: Search Using a Partial Username

- **Related Scenario:** TS-016

- **Objective:** Verify how the application handles a partial username search.

- **Preconditions:** The user is logged in with Admin permissions, and a suitable existing username is available.

- **Test Data:** Part of an existing username.

- **Steps:**

  1. Open the Admin user management page.

  2. Enter part of an existing username in the Username search field.

  3. Click Search.

  4. Review the results.

- **Expected Result:** Record the actual behavior. If matching records are returned, verify that they match the entered text. If no records are returned, note that partial matching may not be supported; do not report a defect unless expected behavior is established.

- **Actual Result:** Searching with the complete username priya.sharma.2024 returned the matching user. Searching with the partial username priya returned “No Records Found.” Partial username matching does not appear to be supported.

- **Status:** PASS — observed behavior documented; expected partial-match behavior is not established.

- **Evidence:** Test_Evidence/TC-016_Partial_Username_Search.png

### TC-017: Search Using a Nonexistent Username

- **Related Scenario:** TS-017

- **Objective:** Verify that searching for a nonexistent username does not return an unrelated user.

- **Preconditions:** The user is logged in with Admin permissions, and the user list is accessible.

- **Test Data:** A username that does not exist, such as `qa_user_not_found_987`.

- **Steps:**

  1. Open the Admin user management page.

  2. Enter the nonexistent username.

  3. Click Search.

  4. Review the results.

- **Expected Result:** No matching user is returned, and the application handles the empty result correctly.

- **Actual Result:** Searching for qa_user_not_found_987 displayed “No Records Found.” No unrelated user was returned.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-017_Nonexistent_Username_Search.png

### TC-018: Search with Username and Optional Filters Left Blank

- **Related Scenario:** TS-018

- **Objective:** Verify the default search behavior when the username and optional filters are left blank.

- **Preconditions:** The user is logged in with Admin permissions, and the user list is accessible.

- **Test Data:** All search and filter fields left blank.

- **Steps:**

  1. Open the Admin user management page.

  2. Leave the Username field empty.

  3. Leave the other search filters empty.

  4. Click Search.

  5. Review the returned results.

- **Expected Result:** The application displays the expected default user-list results without an unexpected error.

- **Actual Result:** With all search fields left blank, clicking Search displayed 29 user records without an error.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-018_Blank_Search_Filters.png

### TC-019: Filter Users by the Admin Role

- **Related Scenario:** TS-019

- **Objective:** Verify that filtering by the Admin role returns users with that role.

- **Preconditions:** The user is logged in with Admin permissions, and the user list is accessible.

- **Test Data:** User Role set to Admin.

- **Steps:**

  1. Open the Admin user management page.

  2. Select Admin from the User Role filter.

  3. Click Search.

  4. Review the role of each returned record.

- **Expected Result:** All returned records match the Admin role filter.

- **Actual Result:** Selecting Admin from the User Role filter and clicking Search returned 8 records. All displayed records had the Admin role.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-019_Admin_Role_Filter.png

### TC-020: Filter Users by the ESS Role

- **Related Scenario:** TS-020

- **Objective:** Verify that filtering by the ESS role returns users with that role.

- **Preconditions:** The user is logged in with Admin permissions, and the user list is accessible.

- **Test Data:** User Role set to ESS.

- **Steps:**

  1. Open the Admin user management page.

  2. Select ESS from the User Role filter.

  3. Click Search.

  4. Review the role of each returned record.

- **Expected Result:** All returned records match the ESS role filter.

- **Actual Result:** Selecting ESS from the User Role filter and clicking Search returned 21 records. All displayed records had the ESS role.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-020_ESS_Role_Filter.png

### TC-021: Filter Users by Enabled Status

- **Related Scenario:** TS-021

- **Objective:** Verify that filtering by Enabled status returns enabled user accounts.

- **Preconditions:** The user is logged in with Admin permissions, and the user list is accessible.

- **Test Data:** Status set to Enabled.

- **Steps:**

  1. Open the Admin user management page.

  2. Select Enabled from the Status filter.

  3. Click Search.

  4. Review the status of each returned record.

- **Expected Result:** All returned records have Enabled status.

- **Actual Result:** Selecting Enabled from the Status filter and clicking Search returned 28 records. All displayed records had Enabled status.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-021_Enabled_Status_Filter.png

### TC-022: Filter Users by Disabled Status

- **Related Scenario:** TS-022

- **Objective:** Verify that filtering by Disabled status returns disabled user accounts.

- **Preconditions:** The user is logged in with Admin permissions, and the user list is accessible.

- **Test Data:** Status set to Disabled.

- **Steps:**

  1. Open the Admin user management page.

  2. Select Disabled from the Status filter.

  3. Click Search.

  4. Review the status of each returned record.

- **Expected Result:** All returned records have Disabled status. If no disabled accounts exist, record that limitation and do not assume the filter is defective.

- **Actual Result:** Selecting Disabled from the Status filter and clicking Search returned 1 record. The returned record, sofia.hernandez.2024, had Disabled status.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-022_Disabled_Status_Filter.png

### TC-023: Combine Username and Role Filters

- **Related Scenario:** TS-023

- **Objective:** Verify that the username and role filters work together.

- **Preconditions:** The user is logged in with Admin permissions, and a suitable existing username and role are available.

- **Test Data:** An existing username and its corresponding role.

- **Steps:**

  1. Open the Admin user management page.

  2. Enter the existing username.

  3. Select the corresponding role.

  4. Click Search.

  5. Review the returned records.

- **Expected Result:** Returned records satisfy both the username and role criteria.

- **Actual Result:** The search returned one record matching username sofia.hernandez.2024 with status Disabled.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-023_Username_Status_Filter.png

### TC-024: Combine Role and Status Filters

- **Related Scenario:** TS-024

- **Objective:** Verify that the role and status filters work together.

- **Preconditions:** The user is logged in with Admin permissions, and the required role and status options are available.

- **Test Data:** A role and a status, such as Admin and Enabled.

- **Steps:**

  1. Open the Admin user management page.

  2. Select a role from the User Role filter.

  3. Select a status from the Status filter.

  4. Click Search.

  5. Review the returned records.

- **Expected Result:** All returned records match both the selected role and status.

- **Actual Result:** The search returned 7 records. The displayed users have the Admin role and Enabled status.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-024_Admin_Enabled_Filter.png 

### TC-025: Clear Previous Filters and Perform a New Search

- **Related Scenario:** TS-025

- **Objective:** Verify that previous search criteria can be cleared before a new search.

- **Preconditions:** The user is logged in with Admin permissions, and the user-list search controls are accessible.

- **Test Data:** Two different search criteria that can be applied safely.

- **Steps:**

  1. Open the Admin user management page.

  2. Apply the first search criteria and click Search.

  3. Use the Reset or Clear control, if available.

  4. Enter different search criteria.

  5. Click Search.

  6. Review the returned records.

- **Expected Result:** The new results match the new search criteria and are not incorrectly restricted by the previous filters.

- **Actual Result:** After resetting the Admin filter and selecting ESS, the search returned 22 records with the ESS role.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-025_Reset_And_New_Search.png

## 4. Employee Management

### TC-026: Open the Employee List

- **Related Scenario:** TS-026

- **Objective:** Verify that an authorized user can access the employee list.

- **Preconditions:** The user is logged in with an account that has permission to access employee records.

- **Test Data:** Valid authorized test account.

- **Steps:**

  1. Locate the PIM menu item in the navigation menu.
  2. Click PIM.
  3. Wait for the employee list page to load.

- **Expected Result:** The employee list page opens successfully and displays the available search controls and employee records.

- **Actual Result:** The Employee List page opened successfully. Search controls for Employee Name, Employee ID, Employment Status, Supervisor Name, Job Title, and Sub Unit were displayed. The page showed 151 employee records.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-026_Employee_List.png

### TC-027: Search for an Existing Employee

- **Related Scenario:** TS-027

- **Objective:** Verify that an existing employee can be found using the available search controls.

- **Preconditions:** The user is logged in with permission to access the employee list, and an existing employee record is available.

- **Test Data:** An existing employee name or employee ID.

- **Steps:**

  1. Open the PIM employee list.

  2. Enter the existing employee's name or ID in the appropriate search field.

  3. Click Search.

  4. Review the returned results.

- **Expected Result:** The matching employee record is displayed.

- **Actual Result:** Searching for Ana returned one matching employee.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-027_Search_Existing_Employee.png

### TC-028: Search for a Nonexistent Employee

- **Related Scenario:** TS-028

- **Objective:** Verify that searching for a nonexistent employee does not return an unrelated record.

- **Preconditions:** The user is logged in with permission to access the employee list.

- **Test Data:** A name or employee ID that does not exist, such as `QA_Employee_Not_Found_987`.

- **Steps:**

  1. Open the PIM employee list.

  2. Enter the nonexistent employee name or ID in the appropriate search field.

  3. Click Search.

  4. Review the results.

- **Expected Result:** No matching employee is returned, and the application handles the empty result correctly.

- **Actual Result:** Searching for the nonexistent employee name employeenotfound987 returned “No Records Found.” No employee records were displayed.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-028_Search_Nonexistent_Employee.png

### TC-029: Open an Employee Record

- **Related Scenario:** TS-029

- **Objective:** Verify that the selected employee's details can be viewed correctly.

- **Preconditions:** The user is logged in with permission to view employee records, and an existing employee is available.

- **Test Data:** An existing employee record.

- **Steps:**

  1. Open the PIM employee list.

  2. Search for an existing employee.

  3. Open the matching employee record using the available control.

  4. Review the displayed employee details.

  5. Leave the record unchanged.

- **Expected Result:** The selected employee's details are displayed correctly, and no unintended changes are made.

- **Actual Result:** The selected employee record opened successfully. Ashley West’s Personal Details page displayed employee information, including Employee ID 0411. No changes were made.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-029_Open_Employee_Record.png

### TC-030: Use Available Employee Search Filters

- **Related Scenario:** TS-030

- **Objective:** Verify that available employee search filters return results matching the selected criteria.

- **Preconditions:** The user is logged in with permission to access the employee list.

- **Test Data:** A supported filter and a value that matches an existing employee, where available.

- **Steps:**

  1. Open the PIM employee list.

  2. Review the available search filters.

  3. Select or enter a valid filter value.

  4. Click Search.

  5. Review the returned records.

- **Expected Result:** The returned records match the selected filter criteria. If a filter is unavailable, record the limitation.

- **Actual Result:** Tested the available employee search filters. The filters returned results matching the selected criteria, with no issues observed.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-030_Employee_Search_Filter.png

### TC-031: Review Required Fields in an Employee Form

- **Related Scenario:** TS-031

- **Objective:** Identify which fields are required in an accessible employee form.

- **Preconditions:** The user is logged in with permission to access the relevant employee form.

- **Test Data:** The Add Employee form, if accessible; otherwise an existing employee form that can be reviewed safely.

- **Steps:**

  1. Open PIM and select Add Employee if the option is available.

  2. Review the visible fields.

  3. Identify fields marked as required, such as through an asterisk or required-field indicator.

  4. Record the required fields.

  5. Exit without saving any changes.

- **Expected Result:** Required fields can be identified and documented without modifying employee records. If the form is inaccessible, record the limitation.

- **Actual Result:** The Add Employee form displayed Employee Full Name with an asterisk indicating it is required. Employee Id had no required-field indicator. The form was reviewed without saving any changes.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-031_Required_Fields.png

### TC-032: Submit an Employee Form with Required Information Missing

- **Related Scenario:** TS-032

- **Objective:** Verify that an employee form validates missing required information.

- **Preconditions:** The user is authorized to access the employee form, and a safe test method is available.

- **Test Data:** Leave at least one confirmed required field empty.

- **Steps:**

  1. Open the relevant employee form.

  2. Leave a required field empty.

  3. Enter other information only if needed to reach the validation step.

  4. Click Save or the relevant submission button only if doing so is safe and permitted.

  5. Review the validation behavior.

  6. Do not create or modify a record unintentionally.

- **Expected Result:** The form prevents submission or clearly identifies the missing required information. No unintended employee record is created or modified.

- **Actual Result:** Clicking Save with First Name and Last Name empty displayed “Required” validation messages for both fields. The form also displayed “Employee Id already exists” for ID 0469. No employee was created.

- **Status:** PASS

- **Evidence:** Test_Evidence/TC-032_Required_Field_Validation.png

## 5. Roles and Permissions

### TC-033: Review Admin Role Information

- **Related Scenario:** TS-033

- **Objective:** Verify that the Admin role is displayed correctly in user management.

- **Preconditions:** The user is logged in with Admin permissions, and the Admin user management page is accessible.

- **Test Data:** An existing user account assigned the Admin role.

- **Steps:**

  1. Open the Admin user management page.

  2. Locate a user assigned the Admin role.

  3. Review the displayed User Role value.

- **Expected Result:** The selected user's role is displayed as Admin.

- **Actual Result:** Not executed yet.

- **Status:** Not Executed

- **Evidence:** To be captured during execution.

### TC-034: Review ESS Role Information

- **Related Scenario:** TS-034

- **Objective:** Verify that the ESS role is displayed correctly in user management.

- **Preconditions:** The user is logged in with Admin permissions, and the Admin user management page is accessible.

- **Test Data:** An existing user account assigned the ESS role.

- **Steps:**

  1. Open the Admin user management page.

  2. Locate a user assigned the ESS role.

  3. Review the displayed User Role value.

- **Expected Result:** The selected user's role is displayed as ESS.

- **Actual Result:** Not executed yet.

- **Status:** Not Executed

- **Evidence:** To be captured during execution.

### TC-035: Compare Features Available to Different Authorized Roles

- **Related Scenario:** TS-035

- **Objective:** Identify differences in navigation and available actions between authorized roles.

- **Preconditions:** Suitable test accounts with different roles are available.

- **Test Data:** Authorized accounts with different roles, such as Admin and ESS.

- **Steps:**

  1. Log in using the first authorized test account.

  2. Record the visible navigation items and relevant available actions.

  3. Log out.

  4. Log in using the second authorized test account.

  5. Record its visible navigation items and relevant available actions.

  6. Compare the observations.

- **Expected Result:** The available features and actions for each role are documented accurately. Any differences match the permissions configured for the accounts.

- **Actual Result:** Not executed yet.

- **Status:** Not Executed

- **Evidence:** To be captured during execution.

### TC-036: Attempt to Access a Restricted Function

- **Related Scenario:** TS-036

- **Objective:** Verify that a user without the required permissions cannot access a restricted function.

- **Preconditions:** Suitable authorized and restricted test accounts are available, and a safe test condition has been identified.

- **Test Data:** A restricted function and an account that should not have permission to use it.

- **Steps:**

  1. Identify a function that requires permissions the test account does not have.

  2. Log in using the restricted test account.

  3. Attempt to access the function through normal navigation.

  4. If safe and appropriate, attempt to open its direct URL.

  5. Observe the application's response.

- **Expected Result:** The user cannot perform the restricted action or view restricted content. The application denies access or redirects the user appropriately.

- **Actual Result:** Not executed yet.

- **Status:** Not Executed

- **Evidence:** To be captured during execution.
