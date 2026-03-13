# Test Plan – SauceDemo Web Application

## Objective
Verify core functionality of the SauceDemo e-commerce application including login authentication, product inventory display, and cart workflows.

## Scope
Features tested:
- User login
- Product inventory page
- Add product to cart
- Error handling for invalid login

## Testing Types
- Manual testing
- Automated UI testing using Playwright
- Cross-browser testing

## Test Environment
Application: https://www.saucedemo.com

Browsers tested:
- Chromium
- Firefox
- WebKit

## Test Management
Testing tasks and defects tracked using a JIRA Agile board and sprint workflow.

## Automation
Playwright automated tests validate login and inventory workflows and are executed in a GitHub Actions CI pipeline.

## Risks
Potential issues include incorrect credential validation, UI loading failures, and cart functionality errors.