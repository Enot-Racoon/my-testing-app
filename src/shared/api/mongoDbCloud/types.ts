export type Document<T> = T & {
  _id: string
}

export interface Product {
  name: string
  price: number
  image: string
}

export type Filter = Record<string, unknown>

export interface FindOneOptions {
  readonly projection?: Record<string, unknown>

  readonly sort?: Record<string, unknown>
}
