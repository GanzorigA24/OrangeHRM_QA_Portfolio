# OrangeHRM Test Plan
## 1. Objective

The objective of this test plan is to verify that the main OrangeHRM features work as expected. Testing focuses on checking functionality, identifying potential defects, executing test cases, and documenting results and evidence.

## 2. Scope

### In Scope

- Authentication and login
- Admin user management
- Employee management
- User roles and permissions
- User search and filtering
- Directory
- Dashboard
- Leave management
- Time and attendance
- Recruitment
- Personal information
- Performance
- Maintenance
- Claims
- Buzz
- Manual functional testing
- Exploratory testing
- Regression testing

### Out of Scope

- Performance and load testing
- Security penetration testing
- Mobile application testing
- Features outside the selected modules

## 3. Testing Types

The following testing types are included in the project:

- **Functional Testing:** Verify that application features behave as expected.
- **Exploratory Testing:** Explore the application to identify unexpected issues beyond the documented test cases.
- **Regression Testing:** Re-test previously working features after changes or bug fixes.
- **Automated Testing:** Automate selected regression test cases using Playwright and TypeScript in a future project phase.

## 4. Test Environment

- **Application:** OrangeHRM Open Source Demo
- **URL:** https://opensource-demo.orangehrmlive.com/
- **Version:** Public hosted demo; exact version not verified
- **Environment:** Hosted web application
- **Operating System:** Windows
- **Browser:** Google Chrome
- **Testing Approach:** Manual functional testing
- **Automation Tools:** Playwright and TypeScript (planned)
- **Test Management:** GitHub
- **Evidence:** Screenshots and documented test results

## 5. Test Data

The test data includes:

- Valid OrangeHRM user credentials
- Invalid usernames and passwords
- Existing employee records
- Admin users
- ESS users
- Enabled and disabled users
- Valid and invalid search values
- Input values for employee management scenarios

Only test data permitted by the hosted demo will be used. Existing records will not be modified or deleted unless necessary and safe for the test.

## 6. Entry Criteria

Testing can begin when:

- The hosted OrangeHRM demo is accessible.
- The required application features are available.
- Required test accounts and test data are available.
- Test scenarios and test cases have been prepared.
- The browser and testing environment are ready.

## 7. Exit Criteria

The manual testing phase can be considered complete when:

- Planned test cases have been executed or their execution limitations documented.
- Actual results and test statuses have been recorded.
- Failed or partially executed test cases have been reviewed.
- Reproducible defects have been documented when identified.
- Relevant screenshots and other evidence have been collected.
- Test scenarios, test cases, and evidence references have been checked for consistency.
- A test execution summary has been prepared.

## 8. Defect Reporting

When a potential defect is discovered, it will be documented with:

- Defect ID
- Title
- Description
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Environment
- Evidence, such as screenshots or videos
- Defect status

Defect reports should contain clear reproduction steps and supporting evidence when available. Severity and priority will be assigned based on the defect's impact and urgency.

Only observed and reproducible defects will be reported as confirmed defects.

## 9. Test Evidence

Test evidence is collected during test execution when appropriate. Evidence may include:

- Screenshots of application behavior and test results
- Screenshots supporting defect reports
- Screen recordings when necessary
- Documented actual results and test statuses

Evidence files are organized in the `Test_Evidence/` directory. Filenames should follow a consistent naming convention and correspond to the relevant test case or scenario.

## 10. Test Documentation

The project documentation is organized as follows:

- **Test Plan:** `Test_Plan/OrangeHRM_TestPlan.md`
- **Test Scenarios:** `Test_Scenarios/OrangeHRM_TestScenarios.md`
- **Test Cases:** `Test_Cases/OrangeHRM_TestCases.md`
- **Bug Report Template:** `Bug_Reports/Bug_Report_Template.md`
- **Test Evidence:** `Test_Evidence/`
- **Project Overview:** `README.md`

These documents will be reviewed together to ensure that scenario IDs, test case IDs, execution results, and evidence references are consistent.

## 11. Future Work

The next project phase will focus on:

- Reviewing and finalizing manual test documentation
- Performing additional exploratory testing
- Reporting verified defects, if found
- Learning Playwright and TypeScript
- Automating selected regression test cases
- Exploring automated test reporting and GitHub Actions