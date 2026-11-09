import { test, expect, chromium } from "@playwright/test"

test("Locator functions",async({page})=>{

    await page.goto("file:///c%3A/Users/jahamaab/OneDrive%20-%20Johnson%20Controls/Desktop/PlaywrightAutomation/address.html")
    //Single line
    //await page.locator("#address").fill("Andhra pradesh India ")
    //Multi line
    await page.locator("#address").fill("Krishna\nAndhra pradesh\n521001")
    await page.waitForTimeout(10000);

    //clear function

    await page.locator("#email").clear()
    await page.waitForTimeout(10000);



})