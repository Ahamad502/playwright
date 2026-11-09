import { test, expect, chromium } from "@playwright/test"

test("Locator functions1",async({page})=>{

    await page.goto("file:///c%3A/Users/jahamaab/OneDrive%20-%20Johnson%20Controls/Desktop/PlaywrightAutomation/address.html")


    await page.locator("//input[@value='Female']").check()

    await page.locator("#terms").check()

    await page.waitForTimeout(10000);

    await page.locator("#terms").uncheck()

    await page.waitForTimeout(10000);


})

