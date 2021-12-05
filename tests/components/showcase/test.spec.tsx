import '!tests/match-media-mock'
import { screen } from '@testing-library/react'

import { Showcase } from '#/components/showcase/showcase'
import { renderWithTheme } from '!tests/helpers/render-with-theme'
import items from '#/fake/product-card-slider-mock'

describe('<Showcase />', () => {
  it('should render the title correctly', () => {
    renderWithTheme(<Showcase title="Products" />)

    const title = screen.getByRole('heading', { name: /products/i })

    expect(title).toBeInTheDocument()
  })

  it('should not render the title', () => {
    renderWithTheme(<Showcase />)

    const title = screen.queryByRole('heading', { name: /products/i })

    expect(title).not.toBeInTheDocument()
  })

  it('should render the products', () => {
    renderWithTheme(<Showcase products={items} />)

    const products = screen.getAllByText(items[0].name)

    expect(products).toHaveLength(2)
  })
})
