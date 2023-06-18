import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { TotalPrice } from "./index"

describe('TotalPrice', () => {
  it('renders correctly total price amount formatted as GBP, e.g. £100.23', async () => {
    render(<TotalPrice amount={100.23} />)
    expect(screen.getByText(/£100.23/i)).toBeVisible()
  })
})
