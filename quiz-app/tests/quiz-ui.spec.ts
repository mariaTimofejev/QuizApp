import { test, expect } from "@playwright/test";

test("quiz flow works", async ({ page }) => {
  await page.goto("http://localhost:5173");

  // Funktsioon ühe küsimuse vastamiseks
  async function answerQuestion(optionIndex: number) {
    const option = page.locator(`[data-testid=option-${optionIndex}]`);
    await option.click();

    const feedback = page.locator("[data-testid=feedback]");
    await expect(feedback).toBeVisible();

    const nextBtn = page.locator("[data-testid=next]");
    await expect(nextBtn).toBeVisible();
    await nextBtn.click();
  }

  // Vastame kõik küsimused (eeldame 3 küsimust)
  const questionCount = 3;
  for (let i = 0; i < questionCount; i++) {
    await answerQuestion(0);
  }

  // Kontrollime, et tulemuste vaade on nähtav
  await expect(page.getByRole("heading", { name: /Skoor:/ })).toBeVisible();
  await expect(page.getByRole("button", { name: "Alusta uuesti" })).toBeVisible();
});


// --- 1. Tagasiside värvi test ---
test("feedback color is correct", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.locator('[data-testid=option-0]').click();

  const feedback = page.locator('[data-testid=feedback]');
  await expect(feedback).toBeVisible();

  const color = await feedback.evaluate(el => getComputedStyle(el).color);

  // Kontrollime, et värv on kas roheline või punane
  expect(["rgb(0, 128, 0)", "rgb(255, 0, 0)"]).toContain(color);
});


// --- 2. Tulemuste tabeli ridade arv ---
test("results table contains correct number of rows", async ({ page }) => {
  await page.goto("http://localhost:5173");

  async function answer(optionIndex: number) {
    await page.locator(`[data-testid=option-${optionIndex}]`).click();
    await page.locator("[data-testid=next]").click();
  }

  const questionCount = 3;
  for (let i = 0; i < questionCount; i++) {
    await answer(0);
  }

  const rows = page.locator("table tbody tr");
  await expect(rows).toHaveCount(questionCount);
});


// --- 3. Restart nupp viib tagasi esimese küsimuse juurde ---
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