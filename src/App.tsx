import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { useEffect, useState } from 'react'

const API_URL = 'https://dummyjson.com/products'


function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchData(API_URL)
  }, [])


  async function fetchData(url: string) {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json();
        // Process the data
        console.log('>>> data: ', data)
        setProducts(data.products)
      } else {
        // Handle the error
        console.log('>>> error response',)
      }
    } catch (error) {
      // Handle the error
      console.log('>>> error: ', error)
    }
  }

  return (
    <>
      <Header />
      <main>
        <Products data={products} />
      </main>
      <Footer />
    </>
  )
}

export default App
