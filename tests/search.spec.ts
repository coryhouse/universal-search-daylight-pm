import { test, expect } from "@playwright/test";

test("should display search results", async ({ page }) => {
  // Find a label with this exact text. Suggested here: https://github.com/microsoft/playwright/issues/14044
  const checkbox1 = page.getByLabel("Select 1");

  await page.goto("http://localhost:3000");
  await page.getByPlaceholder("Enter proNumber").fill("1");

  // Confirm the expected rows exist by looking for each row's checkbox.
  await expect(checkbox1).toHaveCount(1);

  await checkbox1.check();

  await page.getByRole("button", { name: "VIEW SHIPMENT DETAILS" }).click();

  await expect(page).toHaveURL(
    "http://localhost:3000/shipment-details?proNumbers=1"
  );

  await expect(page.getByRole("button", { name: "1" })).toHaveCount(1);
});
