import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { Products } from "./index"

describe('Products', () => {
  beforeEach(() => {
    localStorage.setItem('cart', JSON.stringify({"2":{"id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/2/1.jpg","https://i.dummyjson.com/data/products/2/2.jpg","https://i.dummyjson.com/data/products/2/3.jpg","https://i.dummyjson.com/data/products/2/thumbnail.jpg"],"quantity":1},"3":{"id":3,"title":"Samsung Universe 9","description":"Samsung's new variant which goes beyond Galaxy to the Universe","price":1249,"discountPercentage":15.46,"rating":4.09,"stock":36,"brand":"Samsung","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/3/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/3/1.jpg"],"quantity":1}}))
    render(<Products />)
  })

  it('should render the items from localStorage', async () => {
    expect(await screen.findByText(/iPhone X/)).toBeInTheDocument()
    expect(await screen.findByText(/Samsung Universe 9/)).toBeInTheDocument()
  })

  it('should disable Add to Cart button once the product is added to the cart', async () => {
    const firstItemButton = await screen.findAllByRole('button')
    fireEvent.click(firstItemButton[0])
    expect(firstItemButton[0]).toBeDisabled()
  })
})
