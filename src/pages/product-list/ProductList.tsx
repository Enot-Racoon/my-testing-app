import { type ChangeEvent, useState } from 'react'

import Layout from '@src/pages/layout'
import Header from '@src/widgets/header'
import { ProductCard, taskModel } from '@src/entities/product'

import styles from './ProductList.module.scss'

export default function ProductList() {
  const [highlight, setHighlight] = useState(0)
  const onChangeHighlight = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setHighlight(() => Math.max(parseInt(target.value, 10) || 0, 0))
  }

  return (
    <Layout header={Header}>
      <h1>Our products</h1>
      <p>
        Highlight Products with price more{' '}
        <input type="number" step={100} value={highlight} onChange={onChangeHighlight} />
      </p>
      <div className={styles.productList}>
        {taskModel.model.map(product => (
          <ProductCard key={product.name} product={product} highlight={highlight} />
        ))}
      </div>
    </Layout>
  )
}
