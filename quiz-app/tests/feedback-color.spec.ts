import { test, expect } from "@playwright/test";

test("Tagasiside värv on pärast vastamist korrektne", async ({ page }) => {
  await page.goto("http://localhost:5173");

  // Vali esimene vastus
  const firstOption = page.getByTestId("option-0");
  await firstOption.click();

  // Leia tagasiside element
  const feedback = page.getByTestId("feedback");

  // Veendu, et tagasiside on nähtav
  await expect(feedback).toBeVisible();

  // Kontrolli, et värv on kas roheline (õige) või punane (vale)
  const color = await feedback.evaluate(el => getComputedStyle(el).color);
  expect(["rgb(0, 128, 0)", "rgb(255, 0, 0)"]).toContain(color);
});