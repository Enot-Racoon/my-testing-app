// there extension .js is important
import Page from './page.js'
import { $, $$ } from '@wdio/globals'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

class ProductPage extends Page {
  public imageToUpload = path.join(__dirname, '../__fixtures__/imageToUpload.webp')

  public get loader() {
    return $('div[class*=loader]')
  }

  public get highlightedInput() {
    return $('p > :where(input[type=number])')
  }

  public get products() {
    return $$('div[class*=productList] > div')
  }

  public get highlightedProducts() {
    return $$('div[class*=productList] div[class*=highlighted]')
  }

  public get addProductForm() {
    return $('form[class*=addProductForm]')
  }

  public get SubmitProductFormButton() {
    return $('form[class*=addProductForm] button')
  }

  public get AddProductFormErrors() {
    return $$('form[class*=addProductForm] p[class*=error]')
  }

  public get AddProductFormNameInput() {
    return $('form[class*=addProductForm] div:nth-of-type(1) input')
  }

  public get AddProductFormPriceInput() {
    return $('form[class*=addProductForm] div:nth-of-type(2) input')
  }

  public get AddProductFormImageInput() {
    return $('form[class*=addProductForm] div:nth-of-type(3) input')
  }

  async setHighlighted(value: number) {
    await this.highlightedInput.setValue(value)
  }

  public open() {
    return super.open('products')
  }

  public async submitAddProductForm() {
    // const form = await this.addProductForm
    // await form.findElement('button')
  }
}

export default new ProductPage()
