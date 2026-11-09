import {test,expect,chromium} from "@playwright/test"

test("Login Automate",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    await page.locator("#username").fill("rahulshettyacademy")

    await page.waitForTimeout(1000);

    await page.locator("#password").fill("Learning@830$3mK2")

    await page.waitForTimeout(1000);

    await page.locator("#terms").click()
   
    await page.waitForTimeout(2000);

    await page.locator("#signInBtn").click()

    await page.waitForURL("https://rahulshettyacademy.com/angularpractice/shop")

})

