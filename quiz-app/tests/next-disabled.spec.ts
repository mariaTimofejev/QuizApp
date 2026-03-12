import { test, expect } from "@playwright/test";

test("next button is disabled before answering", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const nextBtn = page.locator("[data-testid=next]");

  await expect(nextBtn).toBeDisabled();
});