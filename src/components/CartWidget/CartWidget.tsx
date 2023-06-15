import { FunctionComponent } from 'react'
import shoppingCart from '../../assets/shopping-cart.svg'
import classes from './cart-widget.module.scss'

interface Props {
  productsCount: number
}

export const CartWidget: FunctionComponent<Props> = ({ productsCount }) => {
  return (
    <button className={classes.container} onClick={() => console.log('>>> go to cart')}>
      <span className={classes.productsCount}>{productsCount}</span>
      <img src={shoppingCart} className={classes.shoppingCart} alt="Go to CartWidget" />
    </button>
  )
}
