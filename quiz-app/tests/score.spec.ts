import { test, expect } from "@playwright/test";

test("score is calculated correctly", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const questionCount = 3;

  for (let i = 0; i < questionCount; i++) {
    await page.locator('[data-testid=option-0]').click();
    await page.locator('[data-testid=next]').click();
  }

  const score = page.getByRole("heading", { name: /Skoor:/ });

  await expect(score).toBeVisible();
});