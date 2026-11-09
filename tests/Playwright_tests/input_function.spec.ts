import {test,expect,chromium} from "@playwright/test";

test("Input Value",async({page})=>{

await page.goto("file:///c%3A/Users/jahamaab/OneDrive%20-%20Johnson%20Controls/Desktop/PlaywrightAutomation/address.html")
const email = await page.locator("#email").inputValue()

console.log("Email us ",email)
expect(email).toBe("ahamad@jci.com")

await page.locator("#email").fill('alfa@jci.com')
const email1 = await page.locator("#email").inputValue()
console.log("changed mail",email1)
await page.waitForTimeout(5000)


})
