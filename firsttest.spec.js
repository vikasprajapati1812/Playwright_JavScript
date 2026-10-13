// include the playwright module
const{test,expect}=require('@playwright/test')

// write a test
test('Validate youtube title', async({page}) =>{
    await page.goto('https://www.youtube.com/')
    await page.getByRole('combobox',{name:"Search"})

})

