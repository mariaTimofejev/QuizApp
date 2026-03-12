import { test, expect } from "@playwright/test";

test("kasutaja saab küsimusele vastata", async ({ page }) => {
  await page.goto("http://localhost:5173");

  // Select the first answer option
  const firstOption = page.getByTestId("option-0");
  await firstOption.click();

  // Feedback should appear after answering
  const feedback = page.getByTestId("feedback");

  await expect(feedback).toBeVisible();
  await expect(feedback).toContainText(/õige|vale/i);
});
