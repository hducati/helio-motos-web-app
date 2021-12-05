import '!tests/match-media-mock'
import { screen } from '@testing-library/react'

import { ProductCardSlider } from '#/components/product-card-slider/product-card-slider'
import { renderWithTheme } from '!tests/helpers/render-with-theme'
import { items } from '#/fake/product-card-slider-mock'

describe('<ProductCardSlider />', () => {
  it('should render previous and next arrows', () => {
    renderWithTheme(<ProductCardSlider items={items} />)

    const nextArrow = screen.getByLabelText(/next products/i)
    const previousArrow = screen.getByLabelText(/previous products/i)

    expect(nextArrow).toBeInTheDocument()
    expect(previousArrow).toBeInTheDocument()
  })

  it('should render four active items', () => {
    const { container } = renderWithTheme(<ProductCardSlider items={items} />)

    const activeItems = container.querySelectorAll('.slick-active')

    expect(activeItems).toHaveLength(4)
  })
})
