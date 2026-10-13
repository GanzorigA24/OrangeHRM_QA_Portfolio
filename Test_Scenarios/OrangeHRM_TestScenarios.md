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
| TS-033 | Review available user roles and their descriptions | Understand the available roles and their intended permissions, if this information is accessible. |
| TS-034 | Compare available functions for different user roles | Identify differences in access and functionality between Admin and ESS accounts, if suitable accounts are available. |
| TS-035 | Verify access to administrator-only functions | Verify that restricted functions are accessible only to authorized users. |
| TS-036 | Verify access to restricted pages or functions | Check whether a user without the required permissions is prevented from accessing restricted content, when safe to test. |

## 6. Directory

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-037 | Open the Directory page | Verify that the Directory page loads and displays employee information. |
| TS-038 | Search for an employee by name | Verify that searching by employee name returns matching results. |
| TS-039 | Filter directory results by job title or location | Verify that available filters narrow the directory results correctly. |

## 7. Dashboard

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-040 | Open the Dashboard page | Verify that the Dashboard loads successfully for an authorized user. |
| TS-041 | Review available Dashboard widgets | Verify that the available widgets display information or content correctly. |
| TS-042 | Review Quick Launch options | Identify the available shortcuts and verify that they lead to the expected pages, where accessible. |
| TS-043 | Review employee-related Dashboard information | Verify that employee-related widgets display information when data is available. |

## 8. Leave

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-044 | Review the available Leave pages | Verify that accessible Leave pages, such as Apply, My Leave, and Leave List, load correctly. |
| TS-045 | Review the leave application form | Identify the available fields and required information when applying for leave. |
| TS-046 | Review leave application form validation | Observe how the system handles missing or invalid information without submitting an unintended request. |
| TS-047 | Review leave records and entitlements | Verify that available leave records and entitlement information are displayed correctly. |
| TS-048 | Review Leave reports and filters | Identify available report options and filters and verify their basic behavior where accessible. |

## 9. Time

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-049 | Review the Timesheets page | Verify that the Timesheets page loads and displays available options. |
| TS-050 | Review the Attendance page | Verify that attendance records and available actions are displayed correctly. |
| TS-051 | Review available time records and filters | Identify available search criteria and verify that they filter records correctly, where accessible. |
| TS-052 | Review Time reports | Verify that available report options can be accessed and reviewed. |
| TS-053 | Review Project Info pages | Verify that available project information pages load and display their records correctly. |

## 10. Recruitment

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-054 | Open the Candidates page | Verify that the Candidates page loads and displays available candidate records. |
| TS-055 | Search for a candidate | Verify that candidate search returns matching results when records are available. |
| TS-056 | Open the Vacancies page | Verify that the Vacancies page loads and displays available vacancy records. |
| TS-057 | Review candidate details | Verify that candidate details can be opened and viewed without making changes. |
| TS-058 | Review available candidate filters | Verify that available filters can narrow candidate records correctly, where accessible. |

## 11. My Info

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-059 | Open the My Info page | Verify that the My Info page loads and displays the employee's personal information. |
| TS-060 | Review Personal Details and Contact Details | Verify that personal and contact information fields are displayed correctly. |
| TS-061 | Review Emergency Contacts and Dependents | Verify that the available emergency contact and dependent information can be viewed. |
| TS-062 | Review Job and Salary information | Verify that the available employment and salary information can be viewed by an authorized user. |
| TS-063 | Review Qualifications and Memberships | Verify that the available qualification and membership information is displayed correctly. |

## 12. Performance

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-064 | Open the Manage Reviews page | Verify that the Manage Reviews page loads and displays available review records or options. |
| TS-065 | Review available performance review filters | Verify that available search and filter options can narrow review records, where accessible. |
| TS-066 | Review My Trackers and Employee Trackers | Verify that the tracker pages load and display available information. |
| TS-067 | Review Performance configuration options | Identify available configuration options without changing any settings. |

## 13. Maintenance

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-068 | Verify access to the Maintenance page | Verify that the Maintenance page enforces administrator authorization and prevents unauthorized access to restricted functions. |

## 14. Claim

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-069 | Review the Submit Claim page | Verify that the Submit Claim page loads and displays the available form fields. |
| TS-070 | Review claim form validation | Observe how the form handles missing required information without submitting an unintended claim. |
| TS-071 | Open the My Claims page | Verify that the page loads and displays available claim records for the current user. |
| TS-072 | Review the Employee Claims and Assign Claim pages | Verify that these pages load and display available options for an authorized user. |
| TS-073 | Review Claim configuration options | Identify available configuration settings without making changes. |

## 15. Buzz

| Scenario ID | Test Scenario | Purpose |
|---|---|---|
| TS-074 | Open the Buzz page | Verify that the Buzz page loads and displays the available feed. |
| TS-075 | Review Buzz feed sorting options | Verify that available sorting options, such as most recent or most liked, organize posts correctly. |
| TS-076 | Review the post creation interface | Verify that the post creation interface is available and displays the expected input options without publishing a post. |
| TS-077 | Review post interactions | Verify that available like and comment options are displayed and accessible, where safe to test. |
| TS-078 | Review photo and video sharing options | Verify that the interface provides available options for attaching or sharing media without publishing content. |

## Notes

- These are planned test scenarios, not executed test cases.
- Testing will be performed through the OrangeHRM website in Google Chrome on Windows. Local installation and Docker are not required.
- Each scenario must be checked against the features available on the website before detailed test cases are finalized.
- Unsupported scenarios will be revised or excluded rather than treated as confirmed functionality.
- Do not modify or delete shared demo records unless the action is confirmed to be safe and permitted.
- Actual results and PASS/FAIL statuses will be recorded only after executing the corresponding test cases.
- Report defects only when unexpected behavior is reproducible and supported by evidence.
- Each detailed test case should reference its related scenario ID and include preconditions, test data, steps, expected result, actual result, status, and evidence when applicable.