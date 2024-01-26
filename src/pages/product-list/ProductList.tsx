import { type ChangeEvent, useState } from 'react'

import Layout from '@src/pages/layout'
import Header from '@src/widgets/header'
import { ProductCard, productModel } from '@src/entities/product'
import { useAsync } from '@src/shared/lib/hooks/useAsync'
import { Loader } from '@ui/loader'
import { ErrorMessage } from '@ui/errorMessage'
import AddProductForm from '@src/features/add-product'
import { type Product } from '@src/shared/api'

import styles from './ProductList.module.scss'

interface HighlightInputProps {
  value: number
  onChange: (value: number) => void
}

const HighlightInput = ({ value, onChange }: HighlightInputProps) => {
  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(parseInt(target.value, 10) || 0, 0)
    onChange(value)
  }
  return (
    <p>
      Highlight Products with price more <input type="number" step={100} value={value} onChange={onChangeHandler} />
    </p>
  )
}

const ProductListContent = ({ highlight }: { highlight?: number }) => {
  const { result: products, pending, error } = useAsync(productModel.getProducts)

  if (pending) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <div className={styles.productList}>
      {products?.map(product => <ProductCard key={product.name} product={product} highlight={highlight} />)}
    </div>
  )
}

export default function ProductList() {
  const [formLoading, setFormLoading] = useState(false)
  const [highlight, setHighlight] = useState(0)

  const addProduct = async (product: Product) => {
    setFormLoading(true)
    await productModel.addProduct(product)
    location.reload()
  }

  return (
    <Layout header={Header}>
      <h1>Our products</h1>
      <AddProductForm loading={formLoading} onSubmit={addProduct} />
      <HighlightInput value={highlight} onChange={setHighlight} />
      <ProductListContent highlight={highlight} />
    </Layout>
  )
}
