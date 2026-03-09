import { test, expect } from "@playwright/test";

test("quiz works", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.click('[data-testid="option-0"]');

  await expect(page.locator('[data-testid="feedback"]'))
    .toBeVisible();
});