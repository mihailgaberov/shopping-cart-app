import { FunctionComponent } from 'react';
import logo from '/logo.svg'
import { CartWidget } from '../CartWidget'
import classes from './header.module.scss'

export const Header: FunctionComponent = () => {
  return (
    <header className={classes.header}>
      <div>
        <a href="/#">
          <img src={logo} className={classes.logo} alt="Shopping CartWidget Application" />
        </a>
      </div>
      <div>
        <CartWidget productsCount={2} />
      </div>
    </header>
  )
}
