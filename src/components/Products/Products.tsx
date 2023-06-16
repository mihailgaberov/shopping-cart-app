import { FunctionComponent } from 'react'
import useLocalStorageState from 'use-local-storage-state'

import { CurrencyFormatter } from '../CurrencyFormatter'
import classes from './products.module.scss'


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

export interface CartProps {
  [productId: string]: Product
}

export const Products: FunctionComponent<Props> = ({ products }) => {
  const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})

  const addToCart = (product: Product):void => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }))
  }

  const isInCart = (productId: number):boolean => Object.keys(cart || {}).includes(productId.toString())

  return (
    <section className={classes.productPage}>
      <h1>Products</h1>

      <div className={classes.container}>
        {products.map(product => (
          <div className={classes.product} key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: <CurrencyFormatter amount={product.price} /></p>
            <button disabled={isInCart(product.id)} onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  )
}
