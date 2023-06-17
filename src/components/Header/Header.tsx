import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'

import logo from '/logo.svg'
import { CartWidget } from '../CartWidget'
import { CartProps } from '../Products/Products.tsx'
import classes from './header.module.scss'

export const Header: FunctionComponent = () => {
  const [cart,] = useLocalStorageState<CartProps>('cart', {})

  const productsCount: number = Object.keys(cart || {}).length

  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
          <img src={logo} className={classes.logo} alt="Shopping CartWidget Application" />
        </Link>
      </div>
      <div>
        <CartWidget productsCount={productsCount} />
      </div>
    </header>
  )
}
