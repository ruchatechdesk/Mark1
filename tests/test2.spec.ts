import {test, expect} from "@playwright/test";

test('Goto PW site and search', async({page})=>{

    await page.goto('https://playwright.dev/')
    console.log('URL opened')
    const playwrightlogo  = await page.getByText('API')
    await expect(playwrightlogo).toBeTruthy()


    const playwrightsearch = await page.locator('.DocSearch-Button-Placeholder')
    await expect(playwrightsearch).toBeVisible({ timeout: 5000 })
    playwrightsearch.click()

    const playwrightinput = await page.locator('.DocSearch-Input')
    await expect(playwrightinput).toBeVisible({ timeout: 10000 });
    await expect(playwrightinput).toBeVisible()
 
    await playwrightinput.fill('input')
})

test('Goto PW and search auto wait', async({page})=>{

   
    await page.goto('https://playwright.dev/')
    console.log('URL opened')
    await page.locator('')
})