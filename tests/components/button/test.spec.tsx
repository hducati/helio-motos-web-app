import { screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '#/components/button/button'
import { renderWithTheme } from '!tests/helpers/render-with-theme'
import {
  mediumSizeAssert,
  smallSizeAssert,
  largeSizeAssert,
  fullWidthAssert
} from '!tests/components/button/asserts'

describe('<Button />', () => {
  it('should be able to render the medium size by default', () => {
    renderWithTheme(<Button>Buy now</Button>)

    const button = screen.getByRole('button', { name: /buy now/i })

    expect(button).toHaveStyle(mediumSizeAssert)
  })

  it('should be able to render the small size', () => {
    renderWithTheme(<Button size="small">Buy now</Button>)

    const button = screen.getByRole('button', { name: /buy now/i })

    expect(button).toHaveStyle(smallSizeAssert)
  })

  it('should be able to render the large size', () => {
    renderWithTheme(<Button size="large">Buy now</Button>)

    const button = screen.getByRole('button', { name: /buy now/i })

    expect(button).toHaveStyle(largeSizeAssert)
  })

  it('should render an fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>)

    const button = screen.getByRole('button', { name: /buy now/i })

    expect(button).toHaveStyle(fullWidthAssert)
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    const button = screen.getByText(/buy now/i)
    const icon = screen.getByTestId('icon')

    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
