import { Meta, Story } from '@storybook/react/types-6-0'

import { Banner } from '#/screens/home/components/banner/banner'
import { BannerProps } from '#/screens/home/components/banner/types'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Jaqueta Alpinestars SP-X ',
    subtitle:
      '<p>Dê uma olhada em nossa mais nova <strong>Jaqueta</strong>, você vai adorar!',
    buttonLabel: 'Comprar',
    buttonLink: '/products/jaqueta'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => <Banner {...args} />
