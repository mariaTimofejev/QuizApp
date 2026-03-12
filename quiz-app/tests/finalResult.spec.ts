import { test, expect } from "@playwright/test";

test("viktoriini lõpus kuvatakse lõpptulemus", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const questionCount = await page.locator("progress").getAttribute("max");

  for (let i = 0; i < Number(questionCount); i++) {
    await page.locator("button").first().click(); // vali vastus
    await page.getByTestId("next").click();       // järgmine küsimus
  }

  await expect(page.getByText(/Skoor:/)).toBeVisible();
});