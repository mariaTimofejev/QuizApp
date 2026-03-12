import { test, expect } from "@playwright/test";

test("punktisumma arvutatakse viktoriini lõpus", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const questionCount = await page.locator("progress").getAttribute("max");

  for (let i = 0; i < Number(questionCount); i++) {
    await page.locator("button").first().click();
    await page.getByTestId("next").click();
  }

  await expect(page.getByText(/Skoor:/)).toBeVisible();
});