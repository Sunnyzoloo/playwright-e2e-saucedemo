import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test.describe("Inventory Tests", () => {
  test("User can add product to cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    await expect(inventoryPage.inventoryItems).toHaveCount(6);

    await inventoryPage.addFirstItemToCart();
    await expect(inventoryPage.cartBadge).toHaveText("1");
  });
});
