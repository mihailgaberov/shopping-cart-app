import shoppingCart from './assets/shopping-cart.svg'
import logo from '/logo.svg'
import classes from './app.module.scss'

function App() {

  return (
    <>
      <header className={classes.header}>
        <div>
          <a href="/#">
            <img src={logo} className={classes.logo} alt="Shopping Cart Application" />
          </a>
        </div>
        <div>
          <button onClick={() => console.log('>>> go to cart')}>
            <img src={shoppingCart} className={classes.shoppingCart} alt="Go to Cart" />
          </button>
        </div>
      </header>
      <main>
        main content here...
      </main>
      <footer>Footer here...</footer>
    </>
  )
}

export default App
