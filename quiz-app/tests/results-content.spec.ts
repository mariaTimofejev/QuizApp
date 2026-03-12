import { test, expect } from "@playwright/test";

test("results table shows questions", async ({ page }) => {
  await page.goto("http://localhost:5173");

  for (let i = 0; i < 3; i++) {
    await page.locator('[data-testid=option-0]').click();
    await page.locator('[data-testid=next]').click();
  }

  const rows = page.locator("table tbody tr");

  await expect(rows.first()).toBeVisible();
});