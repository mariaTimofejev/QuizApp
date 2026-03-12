import { test, expect } from "@playwright/test";

test("quiz flow works", async ({ page }) => {
  await page.goto("http://localhost:5173");

  async function answerQuestion(optionIndex: number) {
    const option = page.locator(`[data-testid=option-${optionIndex}]`);
    await option.click();

    const feedback = page.locator("[data-testid=feedback]");
    await expect(feedback).toBeVisible();

    const nextBtn = page.locator("[data-testid=next]");
    await expect(nextBtn).toBeVisible();
    await nextBtn.click();
  }

  const questionCount = 3;
  for (let i = 0; i < questionCount; i++) {
    await answerQuestion(0);
  }

  await expect(page.getByRole("heading", { name: /Skoor:/ })).toBeVisible();
  await expect(page.getByRole("button", { name: "Alusta uuesti" })).toBeVisible();
});