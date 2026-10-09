# OrangeHRM Test Plan

## 1. Objective

The objective of this test plan is to verify that the main OrangeHRM features work correctly and meet their expected requirements. Testing will focus on finding defects, verifying functionality, and documenting test results and evidence.

## 2. Scope

### In Scope

- Authentication and login
- Employee management
- User roles and permissions
- User search and filtering
- User status
- Basic functional testing
- Exploratory testing
- Regression testing

### Out of Scope

- Performance and load testing
- Security penetration testing
- Mobile application testing
- Features outside the selected modules

## 3. Testing Types

The following testing types will be used during the project:

- **Functional Testing:** Verify that features work according to their expected behavior.
- **Exploratory Testing:** Explore the application to find unexpected problems that may not be covered by test cases.
- **Regression Testing:** Re-test previously working features after changes or bug fixes.
- **Automated Testing:** Automate selected regression tests using Playwright and TypeScript during Week 3.

## 4. Test Environment

- **Application:** OrangeHRM Open Source Demo
- **URL:** https://opensource-demo.orangehrmlive.com/
- **Version:** Public hosted demo; exact version not verified
- **Environment:** Hosted web application
- **Operating System:** Windows
- **Browser:** Google Chrome
- **Testing Tools:** Playwright and TypeScript (planned)
- **Test Management:** GitHub
- **Evidence:** Screenshots, videos, and test results

## 5. Test Data

The following test data will be used during testing:

- Valid OrangeHRM user credentials
- Invalid usernames and passwords
- Existing employee records
- Admin users
- ESS users
- Enabled users
- Disabled users
- Valid and invalid search values
- Test data created specifically for employee management scenarios

Only test data permitted by the hosted demo will be used. Existing records will not be modified or deleted unless the test scenario requires it and the change is safe.

## 6. Entry Criteria

Testing can begin when:

- The hosted OrangeHRM demo is accessible.
- The tester can access the required application features.
- Required test accounts are available.
- Test scenarios and test cases have been prepared.
- Required test data is available.
- The browser and testing environment are ready.

## 7. Exit Criteria

Testing for the project phase can be considered complete when:

- All planned test cases have been executed.
- Test results have been documented.
- Failed test cases have been investigated.
- Reproducible defects have been documented.
- Required screenshots or videos have been collected.
- Exploratory testing has been completed for the selected modules.
- A test summary has been prepared.

## 8. Defect Reporting

When a defect is discovered, it will be documented with:

- Defect ID
- Title
- Description
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Environment
- Evidence such as screenshots or videos
- Defect status

Each defect report will include clear reproduction steps and evidence when available. Severity and priority will be assigned based on the defect's impact and urgency.

## 9. Test Evidence

Test evidence will be collected during test execution when appropriate. Evidence may include:

- Screenshots of test results
- Screenshots of defects
- Screen recordings when necessary
- Test execution results
- Bug reproduction evidence

Evidence files will use a consistent naming convention and will be linked to the related test case or defect report.