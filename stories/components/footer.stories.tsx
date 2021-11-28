import { Meta, Story } from '@storybook/react/types-6-0'

import Footer from '#/components/footer/footer'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Default: Story = (args) => <Footer {...args} />
