import { FunctionComponent } from 'react'
import { Product } from '../Products/Products.tsx'
import classes from './cart.module.scss'

interface Props {
  products: Product[]
}

export const Cart: FunctionComponent<Props> = ({ products }) => {
  return (
    <section className={classes.cart}>
      <h1>Cart</h1>

      <div className={classes.container}>
        {products.map(product => (
          <div className={classes.product} key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <button onClick={() => console.log('>>> minus')}>-</button>
            <p>1</p>
            <button onClick={() => console.log('>>> plus')}>+</button>
          </div>
        ))}
      </div>
    </section>
  )
}
