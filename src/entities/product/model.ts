import { Filter, FindOneOptions, getDbCollection, Product } from '@src/shared/api'

const COLLECTION = 'products'

const getCollection = () => getDbCollection<Product>(COLLECTION)

export const getProducts = async (filter?: Filter, options?: FindOneOptions): Promise<Product[]> => {
  return (await getCollection())?.find(filter, options) ?? []
}

export const addProduct = async (product: Product) => {
  return (await getCollection())?.insertOne(product)
}
