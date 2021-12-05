import { Meta, Story } from '@storybook/react/types-6-0'

import { Showcase } from '#/components/showcase/showcase'
import { ShowcaseProps } from '#/components/showcase/types'
import items from '#/fake/product-card-slider-mock'

export default {
  title: 'Showcase',
  component: Showcase,
  args: {
    title: 'Mais vendidos',
    products: items
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Showcase {...args} />
    <Showcase {...args} />
  </div>
)
