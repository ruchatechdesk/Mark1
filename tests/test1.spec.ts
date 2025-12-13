import {test, expect} from "@playwright/test";


test.beforeEach(async({page})=>{
    await page.goto('https://www.google.com/')
    console.log('Launch the URL')
})


test.describe('Test Suite', ()=>{

    test.beforeEach(async({page})=>{

        const txtsearch = await page.locator('.gLFyf')
        expect(txtsearch).toBeEditable()
        console.log('Assertion to check the editable search')
    })

    test('Enter the playwright and search',async({page})=>{
        
        await page.locator('.gLFyf').fill('Playwright')
        await page.locator('.gNO89b').first().click()

    })
    
})