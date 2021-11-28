import { Meta, Story } from '@storybook/react/types-6-0'

import { BannerSlider } from '#/screens/home/components/banner-slider/banner-slider'
import { bannerSliderItems } from '#/fake/banner-slider-mock'
import { BannerSliderProps } from '#/screens/home/components/banner-slider/types'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items: bannerSliderItems }
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
