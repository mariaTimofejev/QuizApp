import { test, expect } from "@playwright/test";

test("punktisumma arvutatakse viktoriini lõpus", async ({ page }) => {
  await page.goto("http://localhost:5173");

  while (true) {
    await page.locator("button").first().click();

    const nextButton = page.getByTestId("next");

    if (await nextButton.isVisible()) {
      await nextButton.click();
    } else {
      break;
    }
  }

  await expect(page.getByText("Skoor:")).toBeVisible();
});