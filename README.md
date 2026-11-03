# OrangeHRM QA Portfolio

## Project Overview

This project demonstrates my practical skills in Software Quality Assurance (QA) through manual and automated testing of the OrangeHRM Open Source Demo web application.

The project includes test planning, test scenario design, detailed test case creation, manual test execution, evidence collection, and automated regression testing using Playwright and TypeScript.

**Application:** OrangeHRM Open Source Demo  
**Website:** https://opensource-demo.orangehrmlive.com/  
**Testing Types:** Manual Functional Testing, Exploratory Testing, and Automated Regression Testing  
**Automation Tools:** Playwright and TypeScript  
**Browsers Tested:** Chromium, Firefox, and WebKit

## Testing Scope

The project covers the following application areas:

- Login and authentication
- Admin user management
- User search and filtering
- Employee management
- Roles and permissions
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

## Repository Structure

```text
OrangeHRM_QA_Portfolio/
├── Automation/
│   ├── tests/
│   │   ├── orangehrm-login.spec.ts
│   │   └── orangehrm-admin.spec.ts
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── playwright.config.ts
├── Bug_Reports/
│   └── Bug_Report_Template.md
├── Test_Cases/
│   └── OrangeHRM_TestCases.md
├── Test_Evidence/
├── Test_Plan/
│   └── OrangeHRM_TestPlan.md
├── Test_Scenarios/
│   └── OrangeHRM_TestScenarios.md
├── .gitignore
└── README.md
```

## Manual Testing

Manual testing activities include:

- Created a test plan defining the testing scope and approach.
- Designed 53 test scenarios.
- Created 53 detailed test cases.
- Executed manual functional test cases.
- Recorded actual results and test statuses.
- Captured and organized screenshots as test evidence.

## Automated Testing

Automated tests were developed using Playwright and TypeScript.

The automated tests cover:

1. Login page loads successfully.
2. Invalid login credentials display an error.
3. Empty login fields display required validation.
4. User can log out successfully.
5. Protected dashboard redirects after logout.
6. Admin User Management page opens successfully.
7. Existing username can be searched.
8. Users can be filtered by Admin role.

### Cross-Browser Test Results

The complete automated test suite was executed across three browsers.

| Browser | Passed | Failed |
|---|---:|---:|
| Chromium | 8 | 0 |
| Firefox | 8 | 0 |
| WebKit | 8 | 0 |
| **Total** | **24** | **0** |

**Final Result: 24/24 test executions passed.**

The Playwright configuration uses one worker to provide consistent test execution against the shared hosted demo application.

## How to Run Automated Tests

### 1. Clone the repository

```bash
git clone https://github.com/GanzorigA24/OrangeHRM_QA_Portfolio.git
```

### 2. Navigate to the Automation folder

```bash
cd OrangeHRM_QA_Portfolio/Automation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers

```bash
npx playwright install
```

### 5. Run all automated tests

```bash
npx playwright test
```

### 6. View the HTML test report

```bash
npx playwright show-report
```

## Current Project Status

- [x] Created GitHub repository and project structure
- [x] Created test plan
- [x] Designed 53 test scenarios
- [x] Created 53 detailed test cases
- [x] Executed manual test cases
- [x] Captured and organized test evidence
- [x] Developed Playwright automation tests using TypeScript
- [x] Configured Chromium, Firefox, and WebKit
- [x] Executed the complete automated test suite
- [x] Achieved 24/24 passing test executions
- [x] Committed and pushed project files to GitHub

## Project Goals

- Develop practical manual testing skills.
- Improve test scenario and test case design.
- Understand functional and regression testing.
- Practice test automation using Playwright and TypeScript.
- Improve debugging and problem-solving skills.
- Build a practical QA portfolio for future job applications.

## Author

**Ganzorig Arvinbileg**  
Computer Science Student | Aspiring QA Engineer