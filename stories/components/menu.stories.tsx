import { Meta, Story } from '@storybook/react/types-6-0'

import Menu from '#/components/menu/menu'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story = (args) => <Menu {...args} />
