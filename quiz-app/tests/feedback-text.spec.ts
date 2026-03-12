import { test, expect } from "@playwright/test";

test("feedback text appears after answer", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.locator('[data-testid=option-0]').click();

  const feedback = page.locator('[data-testid=feedback]');

  await expect(feedback).toBeVisible();
});