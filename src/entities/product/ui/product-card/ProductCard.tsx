import cn from 'classnames'
import { Product } from '../../types'

import styles from './ProductCard.module.scss'

export interface ProductCardProps {
  product: Product
  highlight?: number
}

export const ProductCard = ({ product, highlight = 0 }: ProductCardProps) => {
  const isHighlighted = highlight > 0 && product.price > highlight
  return (
    <div className={cn(styles.productCard, { [styles.highlighted]: isHighlighted })}>
      <h3>{product.name}</h3>
      <div>
        <img alt={product.name} src={product.image} />
      </div>
      <div>{product.price}</div>
    </div>
  )
}
