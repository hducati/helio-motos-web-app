import { screen } from '@testing-library/react'

import { Heading } from '#/components/heading/heading'
import { renderWithTheme } from '!tests/helpers/render-with-theme'
import {
  smallSizeAssert,
  whiteColorAssert,
  blackColorAssert,
  lineLeftAssert,
  lineBottomAssert
} from '!tests/components/heading/asserts'

describe('<Heading />', () => {
  it('should render small size', () => {
    renderWithTheme(<Heading size="small">Fake heading</Heading>)

    const heading = screen.getByRole('heading', { name: /fake heading/i })

    expect(heading).toHaveStyle(smallSizeAssert)
  })

  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Fake heading</Heading>)

    const heading = screen.getByRole('heading', { name: /fake heading/i })

    expect(heading).toHaveStyle(whiteColorAssert)
  })

  it('should render a black heading', () => {
    renderWithTheme(<Heading color="black">Fake heading</Heading>)

    const heading = screen.getByRole('heading', { name: /fake heading/i })

    expect(heading).toHaveStyle(blackColorAssert)
  })

  it('should render a lineLeft', () => {
    renderWithTheme(<Heading lineLeft>Fake heading</Heading>)

    const heading = screen.getByRole('heading', { name: /fake heading/i })

    expect(heading).toHaveStyle(lineLeftAssert)
  })

  it('should render a lineBottom', () => {
    renderWithTheme(<Heading lineBottom>Fake heading</Heading>)

    const heading = screen.getByRole('heading', { name: /fake heading/i })

    expect(heading).toHaveStyleRule(
      lineBottomAssert['border-bottom'],
      lineBottomAssert['border-type'],
      {
        modifier: lineBottomAssert['modifier']
      }
    )
  })
})
