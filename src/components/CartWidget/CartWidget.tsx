import { FunctionComponent } from 'react'
import shoppingCart from '../../assets/shopping-cart.svg'
import classes from './cart-widget.module.scss'
import { useNavigate } from 'react-router-dom'

interface Props {
  productsCount: number
}

export const CartWidget: FunctionComponent<Props> = ({ productsCount }) => {
  const navigate = useNavigate()

  const navigateToCart = () => {
    navigate('/cart')
  }

  return (
    <button className={classes.container} onClick={navigateToCart}>
      <span className={classes.productsCount}>{productsCount}</span>
      <img src={shoppingCart} className={classes.shoppingCart} alt="Go to CartWidget" />
    </button>
  )
}
