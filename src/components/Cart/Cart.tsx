import { FunctionComponent } from 'react'
import useLocalStorageState from 'use-local-storage-state'

import { Quantifier } from '../Quantifier'
import { CartProps } from '../Products/Products.tsx'
import classes from './cart.module.scss'
import { TotalPrice } from '../TotalPrice'


export const Cart: FunctionComponent = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})

  const handleRemoveProduct = (productId: number):void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart }
      delete updatedCart[productId]
      return updatedCart
    })
  }

  return (
    <section className={classes.cart}>
      <h1>Cart</h1>

      <div className={classes.container}>
        {Object.values(cart || {}).map(product => (
          <div className={classes.product} key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <Quantifier removeProductCallback={() => handleRemoveProduct(product.id)} productId={product.id} />
          </div>
        ))}
      </div>
      <TotalPrice amount={233} />
    </section>
  )
}
