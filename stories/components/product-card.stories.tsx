import { Meta, Story } from '@storybook/react/types-6-0'

import { ProductCard } from '#/components/product-card/product-card'
import { ProductCardProps } from '#/components/product-card/types'
import { productCardItem } from '#/fake/product-card-mock'

const ITEM = productCardItem

export default {
  title: 'ProductCard',
  component: ProductCard,
  args: {
    name: ITEM.name,
    brand: ITEM.brand,
    img: ITEM.img,
    price: ITEM.price,
    promotionalPrice: 'R$ 200,00'
  }
} as Meta

export const Default: Story<ProductCardProps> = (args) => (
  <div style={{ width: '30rem', margin: '0 auto' }}>
    <ProductCard {...args} />
  </div>
)
