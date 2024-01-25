import { ProductCard, taskModel } from '@src/entities/product'

import styles from './ProductList.module.scss'

export default function ProductList() {
  const highlight = 3000
  return (
    <>
      <h2>Products:</h2>
      <div className={styles.productList}>
        {taskModel.model.map(product => (
          <ProductCard key={product.name} product={product} highlight={highlight} />
        ))}
      </div>
    </>
  )
}
