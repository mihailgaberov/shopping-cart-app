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
    const logoElement = document.querySelectorAll("img")[0] as HTMLElement
    const cartWidgetElement = document.querySelectorAll("img")[1] as HTMLElement
    const productsCountElement = document.querySelector("span") as HTMLElement
    const scrollY = document.body.scrollTop || document.documentElement.scrollTop

    if (scrollY > DISTANCE_FROM_TOP) {
      headerElement.style.transition = "height 200ms ease-in"
      headerElement.style.height = "80px"
      logoElement.style.transition = "height 200ms ease-in"
      logoElement.style.height = "4rem"
      cartWidgetElement.style.transition = "height 200ms ease-in"
      cartWidgetElement.style.height = "2rem"
      productsCountElement.style.transition = "font-size 200ms ease-in"
      productsCountElement.style.fontSize = "1.5em"
    } else {
      headerElement.style.height = "150px"
      logoElement.style.height = "6rem"
      cartWidgetElement.style.height = "3rem"
      productsCountElement.style.fontSize = "2em"
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
