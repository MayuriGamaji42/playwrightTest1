// exports.HomePage = class HomePage {

//     constructor(page) {
//         this.page = page;
        
//     }
// } 


// class HomePage {
//     constructor(private page: any, private productList: any, private addToCartbtn: any, private cart: any) {
//         this.page = page;
//         this.productList= '//*[@id="tbodyid"]/div/div/div/h4/a';
//         this.addToCartbtn='//a [normalize-space()="Add to cart"]'; 
//         this.cart='#cartur'
//     }
    
//     async addProductToCart(productName) {
//     const productList = await this.page.$$(this.productList); 
//     for (const product of productList) {
//     if (productName === await product.textContent()) 
//         { await product.click()
//           break;
//     }
//     }

//     await this.page.locator(this.addToCartbtn).click()

//     await this.page.on('dialog', async dialog=>{
//         if(dialog.message().includes('added')){
//             await dialog.accept()
//         }
//     })

//     }

//     async gotoCart(){

//         await this.page.locator(this.cart).click()
//     }
// }

// exports.HomePage = HomePage;



import { Page } from 'playwright';

export default class HomePage {
    //   private page: Page;

    constructor(private page: any, private productList: any, private addToCartbtn: any, private cart: any) {
        this.page = page;
        this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCartbtn ='//a [normalize-space()="Add to cart"]'; 
        this.cart ='#cartur'
    }
    
    async addProductToCart(productName) {
    const productList = await this.page.$$(this.productList); 
    for (const product of productList) {
    if (productName === await product.textContent()) 
        { await product.click()
          break;
    }   
    
    }

    await this.page.locator(this.addToCartbtn).click()

    await this.page.on('dialog', async dialog=>{
        if(dialog.message().includes('added')){
            await dialog.accept()
        }
    })

    }

    async gotoCart(){

        await this.page.locator(this.cart).click()
    }
}

