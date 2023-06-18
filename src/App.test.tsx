import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from "./App.tsx"

describe('App', () => {
  it('should renders correctly', async () => {
    render(<App />)
    expect(screen.getByAltText(/Shopping Cart Application/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Go to Cart/i)).toBeInTheDocument()
    expect(await screen.findByText('Products')).toBeInTheDocument()
    expect(await screen.findByText('iPhone 9')).toBeInTheDocument()
    expect(await screen.findByText('© Mihail Gaberov 2023. All rights reserved.')).toBeInTheDocument()
  })
})
