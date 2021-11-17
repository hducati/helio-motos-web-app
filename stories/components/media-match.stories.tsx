import { Meta, Story } from '@storybook/react/types-6-0'

import MediaMatch from '#/components/media-match/media-match'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Default: Story = (args) => <MediaMatch {...args} />
