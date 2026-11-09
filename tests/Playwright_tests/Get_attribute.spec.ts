import {test,expect,chromium} from "playwright/test"

test("GEt the attribute value",async({page})=>{

    await page.goto("file:///c%3A/Users/jahamaab/OneDrive%20-%20Johnson%20Controls/Desktop/PlaywrightAutomation/address.html")
    const textbro = await page.locator("#phone").getAttribute("name");

    console.log("The title is ",textbro)

    await expect(textbro).toBe("phone")
    await page.waitForTimeout(1000);




})

