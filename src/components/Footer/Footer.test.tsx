import { render, screen } from '@testing-library/react'
import { describe, expect, it, beforeEach } from 'vitest'

import { Footer } from "./index"

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('renders correctly social links', async () => {
    expect(screen.getByText(/twitter/i)).toBeVisible()
    expect(screen.getByText(/github/i)).toBeVisible()
  })

  it('has social links working correctly', async () => {
    expect(screen.getByText('twitter').closest('a')).toHaveAttribute('href', 'https://twitter.com/mihailgaberov');
    expect(screen.getByText('github').closest('a')).toHaveAttribute('href', 'https://github.com/mihailgaberov');
  })


  it('should contain copyright info', () => {
    expect(screen.getByText(/© Mihail Gaberov 2023. All rights reserved./i)).toBeVisible()
  })

  it('should contain version number', () => {
    expect(screen.getByText(/v.1.0.0/i)).toBeVisible()
  })
})
