import logo from '/logo.svg'
import classes from './app.module.scss'
import { CartWidget } from './components/CartWidget'

function App() {

  return (
    <>
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
      <main>
        main content here...
      </main>
      <footer>Footer here...</footer>
    </>
  )
}

export default App
