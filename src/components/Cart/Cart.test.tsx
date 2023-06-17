import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { Cart } from "./index";

describe('Cart', () => {
  beforeEach(() => {
    render(<Cart />);
  })

  it('renders correctly when empty', async () => {
    expect(screen.getByText(/Total:/i)).toBeVisible()
  })
})
