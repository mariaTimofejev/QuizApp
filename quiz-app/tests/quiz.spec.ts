import { test, expect } from "@playwright/test";

test("quiz flow works", async ({ page }) => {
  await page.goto("http://localhost:5173");

  // Funktsioon ühe küsimuse vastamiseks
  async function answerQuestion(optionIndex: number) {
    const option = page.locator(`[data-testid=option-${optionIndex}]`);
    await option.click();

    
    // Oota tagasisidet
    const feedback = page.locator("[data-testid=feedback]");
    await expect(feedback).toBeVisible();

    // Vajuta Next või Submit kui olemas
    const nextBtn = page.locator("[data-testid=next], [data-testid=submit]");
    if (await nextBtn.isVisible()) {
      await nextBtn.click();
    }
  }
// Vastame küsimustele seni, kuni jõuame tulemuste vaatesse
  while (true) {
    const h2Text = (await page.locator("h2").textContent())?.trim();

    if (h2Text === "Tulemused") {
      break;
    }

    // Vastame esimesele valikule
    await answerQuestion(0);
  }

  // Kontrollime tulemuste vaadet
  await expect(page.locator("h2")).toHaveText("Tulemused");
  await expect(page.locator("text=Alusta uuesti")).toBeVisible();
});
