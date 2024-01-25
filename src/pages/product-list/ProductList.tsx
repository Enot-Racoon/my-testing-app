import { type ChangeEvent, useState } from 'react'

import Layout from '@src/pages/layout'
import Header from '@src/widgets/header'
import { ProductCard } from '@src/entities/product'
import { useAsync } from '@src/shared/lib/hooks/useAsync'
import { getProducts } from '@src/shared/api/mongoDbCloud/base'
import { Loader } from '@ui/loader'
import { ErrorMessage } from '@ui/errorMessage'

import styles from './ProductList.module.scss'

const ProductListContent = () => {
  const [highlight, setHighlight] = useState(0)
  const onChangeHighlight = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setHighlight(() => Math.max(parseInt(target.value, 10) || 0, 0))
  }

  const { result: products, pending, error } = useAsync(getProducts)

  if (pending) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <>
      <p>
        Highlight Products with price more{' '}
        <input type="number" step={100} value={highlight} onChange={onChangeHighlight} />
      </p>
      <div className={styles.productList}>
        {products?.map(product => <ProductCard key={product.name} product={product} highlight={highlight} />)}
      </div>
    </>
  )
}

export default function ProductList() {
  return (
    <Layout header={Header}>
      <h1>Our products</h1>
      <ProductListContent />
    </Layout>
  )
}
