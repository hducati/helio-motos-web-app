import { Meta, Story } from '@storybook/react/types-6-0'

import { Heading } from '#/components/heading/heading'
import { HeadingProps } from '#/components/heading/types'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Populars'
}
