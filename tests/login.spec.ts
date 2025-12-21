import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

const loginTestData = [
  {
    title: "Valid login",
    username: "standard_user",
    password: "secret_sauce",
    shouldSucceed: true,
  },
  {
    title: "Invalid password",
    username: "standard_user",
    password: "wrong_password",
    shouldSucceed: false,
    error:
      "Epic sadface: Username and password do not match any user in this service",
  },
  {
    title: "Locked out user",
    username: "locked_out_user",
    password: "secret_sauce",
    shouldSucceed: false,
    error: "Epic sadface: Sorry, this user has been locked out.",
  },
];

test.describe("Login Tests (Data-Driven)", () => {
  for (const data of loginTestData) {
    test(data.title, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(data.username, data.password);

      if (data.shouldSucceed) {
        await expect(page).toHaveURL(/inventory.html/);
      } else {
        await expect(loginPage.errorMessage).toHaveText(data.error);
      }
    });
  }
});
