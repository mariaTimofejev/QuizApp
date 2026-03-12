import { test, expect } from "@playwright/test";

test("rakendus avaneb ja kuvab esimese küsimuse", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await expect(page.getByRole("heading", { name: "Viktoriin" })).toBeVisible();
  await expect(page.getByText(/Küsimus 1/)).toBeVisible();
});