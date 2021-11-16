import { Meta, Story } from '@storybook/react/types-6-0'

import Button from 'components/button/button'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story = (args) => <Button {...args} />
