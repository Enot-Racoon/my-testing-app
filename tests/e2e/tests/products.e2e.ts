// there extension .js is important
import ProductPage from '../pages/products.page.js'

describe('Run e2e test for the products page', () => {
  it('Testing correct work highlighted input', async () => {
    await ProductPage.open()

    await expect(ProductPage.loader).toBeExisting()
    await expect(ProductPage.loader).not.toBeExisting()

    await expect((await ProductPage.products).length).not.toBe(0)
    await expect((await ProductPage.products).length).toBeGreaterThan(0)
    await expect((await ProductPage.highlightedProducts).length).toBe(0)

    await ProductPage.setHighlighted(2000)
    const highlightedCount = (await ProductPage.highlightedProducts).length
    await expect(highlightedCount).not.toBe(0)

    await ProductPage.setHighlighted(20000)
    await expect((await ProductPage.highlightedProducts).length).not.toBe(highlightedCount)

    await ProductPage.setHighlighted(0)
    await expect((await ProductPage.highlightedProducts).length).toBe(0)

    await expect(true).toBeTruthy()
  })
  describe('Testing add product form', () => {
    it('Testing validation & submit', async () => {
      await ProductPage.open()

      await expect(ProductPage.loader).toBeExisting()
      await expect(ProductPage.loader).not.toBeExisting()

      await expect(ProductPage.addProductForm).toBeExisting()
      await expect(ProductPage.SubmitProductFormButton).toBeExisting()

      await expect(ProductPage.AddProductFormErrors).not.toBeExisting()

      await ProductPage.SubmitProductFormButton.click()

      await expect(await ProductPage.AddProductFormErrors.length).toBe(3)

      await expect(ProductPage.AddProductFormNameInput).toBeExisting()
      await expect(ProductPage.AddProductFormPriceInput).toBeExisting()
      await expect(ProductPage.AddProductFormImageInput).toBeExisting()

      await ProductPage.AddProductFormNameInput.setValue(`e2e test product (${new Date().toLocaleString()})`)
      await expect(await ProductPage.AddProductFormErrors.length).toBe(2)

      const getRandomPrice = () => ~~(Math.random() * 10 + 1) * 10 * ~~(Math.random() * 100)

      await ProductPage.AddProductFormPriceInput.setValue(getRandomPrice())
      await expect(await ProductPage.AddProductFormErrors.length).toBe(1)

      await ProductPage.AddProductFormImageInput.setValue(ProductPage.imageToUpload)
      await expect(await ProductPage.AddProductFormErrors.length).toBe(0)

      const productCount = (await ProductPage.products).length
      await ProductPage.SubmitProductFormButton.click()

      await browser.pause(3000)

      await expect(ProductPage.loader).toBeExisting()
      await expect(ProductPage.loader).not.toBeExisting()

      await expect((await ProductPage.products).length).toBe(productCount + 1)
    })
  })
})
