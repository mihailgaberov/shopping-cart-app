import { FunctionComponent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'

import logo from '/logo.svg'
import { CartWidget } from '../CartWidget'
import { CartProps } from '../Products/Products.tsx'
import classes from './header.module.scss'

export const Header: FunctionComponent = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => shrinkHeader(), false)

    return () => {
      window.removeEventListener("scroll", () => shrinkHeader())
    }
  }, [])

  const shrinkHeader = () => {
    const DISTANCE_FROM_TOP = 140
    const headerElement = document.querySelector("header") as HTMLElement
    const scrollY =
      document.body.scrollTop || document.documentElement.scrollTop
    if (scrollY > DISTANCE_FROM_TOP) {
      headerElement.style.transition = "height 200ms ease-in"
      headerElement.style.height = "100px"
    } else {
      headerElement.style.height = "150px"
    }
  }
  const [cart,] = useLocalStorageState<CartProps>('cart', {})

  const productsCount: number = Object.keys(cart || {}).length

  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
          <img src={logo} className={classes.logo} alt="Shopping Cart Application" />
        </Link>
      </div>
      <div>
        <CartWidget productsCount={productsCount} />
      </div>
    </header>
  )
}
