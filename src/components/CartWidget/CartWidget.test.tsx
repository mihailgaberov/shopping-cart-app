import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrowserRouter } from 'react-router-dom'

import { CartWidget } from "./index"

describe('CartWidget', () => {
  it('renders correctly when no products are added to the cart', async () => {
    render(<BrowserRouter><CartWidget productsCount={0} /></BrowserRouter>)
    expect(screen.getByText(/0/i)).toBeVisible()
  })

  it('renders correctly when products are added to the cart', () => {
    render(<BrowserRouter><CartWidget productsCount={3} /></BrowserRouter>)
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
