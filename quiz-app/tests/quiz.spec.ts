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

  // Loop until results view appears
  while (true) {
    const scoreHeader = page.getByRole("heading", { name: /Skoor:/ });

    if (await scoreHeader.isVisible()) {
      break;
    }

    await answerQuestion(0);
  }

  // Verify results view
  await expect(page.getByRole("heading", { name: /Skoor:/ })).toBeVisible();
  await expect(page.getByRole("button", { name: "Alusta uuesti" })).toBeVisible();
});