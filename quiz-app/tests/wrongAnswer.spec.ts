import { test, expect } from "@playwright/test";

test("vale vastus kuvab õige tagasiside", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.locator("button").nth(1).click();

  const feedback = page.getByTestId("feedback");

  await expect(feedback).toBeVisible();
  await expect(feedback).toHaveText(/Vale vastus!/);
});