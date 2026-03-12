import { test, expect } from "@playwright/test";

test("feedback color is correct", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.locator('[data-testid=option-0]').click();

  const feedback = page.locator('[data-testid=feedback]');
  await expect(feedback).toBeVisible();

  const color = await feedback.evaluate(el => getComputedStyle(el).color);

  expect(["rgb(0, 128, 0)", "rgb(255, 0, 0)"]).toContain(color);
});