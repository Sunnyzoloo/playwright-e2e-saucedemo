# Playwright E2E Automation – SauceDemo

End-to-end test automation project built with **Playwright and TypeScript** to validate core e-commerce workflows in the SauceDemo application.

This project demonstrates the **complete QA testing lifecycle**, including test planning, JIRA-based task management, defect tracking, automated UI testing, and CI/CD integration.

---

## Tech Stack

* Playwright
* TypeScript
* Node.js
* JIRA (test management & bug tracking)
* GitHub Actions (CI/CD)

---

## Test Coverage

The automated tests validate key user workflows within the application:

* Login scenarios (valid user, invalid password, locked-out user) using data-driven testing
* Product inventory functionality (adding products to the cart)
* Cart functionality (verifying added products)

---

## QA Artifacts

This project includes QA management artifacts demonstrating the testing workflow.

Artifacts are located in the **`qa-artifacts`** folder:

* Test Plan
* JIRA Sprint Backlog
* JIRA Bug Report Example
* Test Execution Workflow Screenshots

These artifacts illustrate how testing tasks, defect tracking, and sprint workflows are managed in an Agile QA environment.

---

## Project Structure

```
playwright-e2e-saucedemo
│
├── tests
├── pages
├── playwright.config.ts
│
└── qa-artifacts
    ├── jira-board-workflow.png
    ├── jira-bug-report.png
    ├── jira-sprint-backlog.png
    └── test-plan.md
```

---

## How to Run the Tests

Install dependencies:

```bash
npm install
```

Run the Playwright test suite:

```bash
npx playwright test
```

---

## Author

Zoljargal Enkhbayar
Computer Science – Saint Cloud State University
