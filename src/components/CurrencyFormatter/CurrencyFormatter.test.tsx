import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { CurrencyFormatter } from "./index"

describe('CartWidget', () => {
  it('renders correctly amounts formatted as GBP, e.g. £100.23', async () => {
    render(<CurrencyFormatter amount={100.23} />)
    expect(screen.getByText(/£100.23/i)).toBeVisible()
  })
})
