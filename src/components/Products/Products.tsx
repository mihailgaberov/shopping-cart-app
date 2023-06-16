import { FunctionComponent } from 'react'
import classes from './products.module.scss'
import { CurrencyFormatter } from '../CurrencyFormatter'

type Product = {
  id: number
  title: string
  price: number
  thumbnail: string
  image: string
}

interface Props {
  data: Product[]
}


export const Products: FunctionComponent<Props> = ({ data }) => (
  <div className={classes.productPage}>
    <h1>Products</h1>

    <div className={classes.container}>
      {data.map(product => (
        <div className={classes.product} key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Price: <CurrencyFormatter amount={product.price} /></p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
)
