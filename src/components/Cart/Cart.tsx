import { FunctionComponent } from 'react'
import { Product } from '../Products/Products.tsx'
import classes from './cart.module.scss'
import { Quantifier } from '../Quantifier'

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
            <Quantifier removeItemCallback={() => console.log('>>> remove item with id: ', product.id)} itemId={product.id} />
          </div>
        ))}
      </div>
    </section>
  )
}
