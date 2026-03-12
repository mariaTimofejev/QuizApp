import { test, expect } from "@playwright/test";

test("viktoriini lõpus kuvatakse tulemuste tabel ja skoor", async ({ page }) => {
  await page.goto("http://localhost:5173");

  while (true) {
    await page.locator("button").first().click();

    const next = page.getByTestId("next");

    if (await next.isVisible()) {
      await next.click();
    } else {
      break;
    }
  }

  await expect(page.getByText("Skoor:")).toBeVisible();
  await expect(page.locator("table")).toBeVisible();
});