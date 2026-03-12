import { test, expect } from "@playwright/test";

test("restart button resets quiz", async ({ page }) => {
  await page.goto("http://localhost:5173");

  async function answer(optionIndex: number) {
    await page.locator(`[data-testid=option-${optionIndex}]`).click();
    await page.locator("[data-testid=next]").click();
  }

  const questionCount = 3;

  for (let i = 0; i < questionCount; i++) {
    await answer(0);
  }

  await page.getByRole("button", { name: "Alusta uuesti" }).click();

  await expect(page.locator("text=Küsimus 1 /")).toBeVisible();
});