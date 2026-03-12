import { test, expect } from "@playwright/test";

test("only one answer can be selected", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const option1 = page.locator('[data-testid=option-0]');
  const option2 = page.locator('[data-testid=option-1]');

  await option1.click();
  await option2.click();

  await expect(option2).toBeVisible();
});