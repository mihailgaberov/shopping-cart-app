import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { Cart } from './components/Cart'
import classes from './app.module.scss'

const API_URL = 'https://dummyjson.com/products'

function App() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchData(API_URL)
  }, [])


  async function fetchData(url: string) {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products)
      } else {
        setError(true)
      }
    } catch (error) {
      setError(true)
    }
  }

  if (error) {
    return <h3 className={classes.error}>An error occurred when fetching data. Please check the API and try again.</h3>
  }

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Products products={products} />} />
          <Route path="/cart" element={<Cart products={products} />} />
        </Routes>

      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
