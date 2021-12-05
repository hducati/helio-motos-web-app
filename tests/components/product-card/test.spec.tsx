import { screen } from '@testing-library/react'

import { ProductCard } from '#/components/product-card/product-card'
import { renderWithTheme } from '!tests/helpers/render-with-theme'
import { productCardItem } from '#/fake/product-card-mock'

describe('<ProductCard />', () => {
  it('should render not optional values', () => {
    renderWithTheme(<ProductCard {...productCardItem} />)

    const img = screen.getByRole('img', { name: `${productCardItem.name}-img` })
    const name = screen.getByText(productCardItem.name)
    const brand = screen.getByText(productCardItem.brand)
    const price = screen.getByText(productCardItem.price)

    expect(img).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(brand).toBeInTheDocument()
    expect(price).toBeInTheDocument()
  })

  it('should render promotional valeu when provided', () => {
    renderWithTheme(
      <ProductCard {...productCardItem} promotionalPrice="R$ 200,00" />
    )

    const promotionalPrice = screen.getByText('R$ 200,00')

    expect(promotionalPrice).toBeInTheDocument()
  })
})
