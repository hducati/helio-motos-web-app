import { render, screen } from '@testing-library/react'

import { Logo } from '#/components/logo/logo'
import {
  logoLargeSize,
  logoMediumSize,
  logoSmallSize
} from '!tests/components/logo/asserts'

describe('<Logo />', () => {
  it('should render medium size by default', () => {
    render(<Logo img="/img/old-logo.jpg" />)

    const logoParentElement = screen.getByRole('img').parentElement

    expect(logoParentElement).toHaveStyle(logoMediumSize)
  })

  it('should render a logo with large size', () => {
    render(<Logo size="large" img="/img/old-logo.jpg" />)

    const logoParentElement = screen.getByRole('img').parentElement

    expect(logoParentElement).toHaveStyle(logoLargeSize)
  })

  it('should render a logo with small size', () => {
    render(<Logo size="small" img="/img/old-logo.jpg" />)

    const logoParentElement = screen.getByRole('img').parentElement

    expect(logoParentElement).toHaveStyle(logoSmallSize)
  })
})
