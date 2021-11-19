import { Meta, Story } from '@storybook/react/types-6-0'

import { Logo } from '#/components/logo/logo'
import { LogoProps } from '#/components/logo/types'

export default {
  title: 'Logo',
  component: Logo,
  args: {
    img: '/img/old-logo.jpg',
    size: 'large'
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
