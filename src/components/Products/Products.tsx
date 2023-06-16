import { FunctionComponent } from 'react'
import classes from './products.module.scss'
import { CurrencyFormatter } from '../CurrencyFormatter'

export type Product = {
  id: number
  title: string
  price: number
  thumbnail: string
  image: string
}

interface Props {
  products: Product[]
}


export const Products: FunctionComponent<Props> = ({ products }) => (
  <section className={classes.productPage}>
    <h1>Products</h1>

    <div className={classes.container}>
      {products.map(product => (
        <div className={classes.product} key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Price: <CurrencyFormatter amount={product.price} /></p>
          <button onClick={() => console.log('>>> add to cart')}>Add to Cart</button>
        </div>
      ))}
    </div>
  </section>
)
