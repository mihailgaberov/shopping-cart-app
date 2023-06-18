import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { Quantifier } from "./index"

describe('Quantifier', () => {
  beforeEach(() => {
    const handleClick = () => {
      return ''
    }
    render(<Quantifier handleUpdateQuantity={handleClick} productId={1} removeProductCallback={handleClick} />)
  })

  it('should render correctly', () => {
    expect(screen.getByText('-')).toBeInTheDocument()
    expect(screen.getByText('+')).toBeInTheDocument()
    const inputElement = screen.getByRole('spinbutton') as HTMLInputElement
    expect(inputElement.value).toBe('1')
  })
})
