import { Meta, Story } from '@storybook/react/types-6-0'

import { ProductCardSlider } from '#/components/product-card-slider/product-card-slider'
import items from '#/fake/product-card-slider-mock'
import { ProductCardSliderProps } from '#/components/product-card-slider/types'

export default {
  title: 'ProductCardSlider',
  component: ProductCardSlider,
  args: {
    items
  }
} as Meta

export const Default: Story<ProductCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <ProductCardSlider {...args} />
  </div>
)
