import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import { Cart } from "./index"

describe('Cart', () => {
  beforeEach(() => {
    localStorage.setItem('cart', JSON.stringify({"2":{"id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/2/1.jpg","https://i.dummyjson.com/data/products/2/2.jpg","https://i.dummyjson.com/data/products/2/3.jpg","https://i.dummyjson.com/data/products/2/thumbnail.jpg"],"quantity":1},"3":{"id":3,"title":"Samsung Universe 9","description":"Samsung's new variant which goes beyond Galaxy to the Universe","price":1249,"discountPercentage":15.46,"rating":4.09,"stock":36,"brand":"Samsung","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/3/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/3/1.jpg"],"quantity":1}}))
    render(<Cart />)
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('renders correctly when empty', async () => {
    expect(screen.getByText(/Total:/i)).toBeVisible()
  })

  it('should render the items from localStorage', () => {
    expect(screen.getByText('iPhone X')).toBeInTheDocument()
    expect(screen.getByText('Samsung Universe 9')).toBeInTheDocument()
  })

  it('removes products from the cart', async () => {
    expect(screen.getByText('iPhone X')).toBeInTheDocument()
    const minusButtons = await screen.findAllByText('-')
    fireEvent.click(minusButtons[0])
    expect(screen.queryByText('iPhone X')).not.toBeInTheDocument()
  })

  it('updates the quantity of products in the cart', async () => {
    const plusButtons = await screen.findAllByText('+')
    fireEvent.click(plusButtons[0])
    expect(screen.getByText('Samsung Universe 9')).toBeInTheDocument()
    expect(screen.getByText('£3,047.00')).toBeInTheDocument()
  })
})
