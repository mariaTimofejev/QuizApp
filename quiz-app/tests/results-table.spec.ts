import { test, expect } from "@playwright/test";

test("results table contains correct number of rows", async ({ page }) => {
  await page.goto("http://localhost:5173");

  async function answer(optionIndex: number) {
    await page.locator(`[data-testid=option-${optionIndex}]`).click();
    await page.locator("[data-testid=next]").click();
  }

  const questionCount = 3;

  for (let i = 0; i < questionCount; i++) {
    await answer(0);
  }

  const rows = page.locator("table tbody tr");
  await expect(rows).toHaveCount(questionCount);
});