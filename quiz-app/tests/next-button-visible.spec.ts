import { test, expect } from "@playwright/test";

test("next button appears after answering", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const nextBtn = page.locator("[data-testid=next]");
  const option0 = page.locator('[data-testid=option-0]');

  await option0.click();

  await expect(nextBtn).toBeVisible(); // nüüd nupp kuvatakse
});