import {test,expect,chromium} from "@playwright/test"

   
    /* //launch the browser
    const browser = await chromium.launch({channel:'msedge'})
    //for new session without the cookies or dependent one
    const context = await browser.newContext()
    //for new page
    const page = await context.newPage()
   
    await page.goto("https://www.google.com")  

    await expect(page).toHaveTitle("Google")

    //close the browser
    await browser.close() */

    //for normal browser

    //const browser = await chromium.launchPersistentContext("",{channel:'msedge'})

    //const page = await browser.pages()[0]here index is the tabs in the browser

    //get by text is used to get the element by the text present in it
    //await page.goto("https://www.google.com")  

    //const gmail_link=page.getByText("Gmail",{exact:true})

    //await gmail_link.click()

    //get by label is used to get the element by the label present in it
    //await page.goto("https://www.wikipedia.org/")
    //const wikipedia_page = page.getByLabel("Search Wikipedia")
    //wikipedia_page.fill('playwright')
    //await page.waitForTimeout(10000)

    //await page.goto("https://www.instagram.com")
    //const search_box = page.getByLabel("Mobile number, username or email")
    //search_box.fill("maidapindi1@gmail.com")
    //await page.waitForTimeout(10000)

test('Testing sets', async ({ page }) => {
//await page.goto("https://www.facebook.com")

//const Email_textbox=page.getByLabel("Email address or phone number")

//await Email_textbox.fill("Demo@gmail.com")

//await page.waitForTimeout(10000)  



//Get by plcaeholder

//await page.goto("https://www.amazon.in")

//const search = page.getByPlaceholder("Search Amazon.in")

//await search.fill("s25 ultra 5g")

//await page.waitForTimeout(10000)


///get by the placeholder

//await page.goto("https://www.district.in")

//const movie = page.getByAltText("Udta Teer");

//await movie.click();

//await page.waitForTimeout(10000)

// GEt by title
//await page.goto("https://www.mail.com")

//const Search_Textbox=page.getByTitle("Enter searchterm here");

//await Search_Textbox.fill("jobs sahur sahur")

//await page.waitForTimeout(10000)


// get by alttxt

//await page.goto("zomato.com")

//const imga = page.getByAltText("")

//await imga.click();

//await page.waitForTimeout(10000);

//await page.goto("https://open.spotify.com/")

//const login = page.getByTestId("signup-button")

//await login.click();

//await page.waitForTimeout(10000)

//get by role 

//await page.goto("https://www.google.com")

//const gmail_link = page.getByRole("link",{name:"Gmail",exact:true})

//await gmail_link.click()

//await page.waitForTimeout(10000);

//Getting the default website dimensions 
await page.goto("https://www.google.com")

page.setViewportSize({height:864,width:1536})


const browser_width = page.viewportSize()?.width;
const browser_height = page.viewportSize()?.height;

console.log(browser_width,browser_height)
await page.waitForTimeout(10000)
});


   
    //await expect(page).toHaveTitle("Google")

