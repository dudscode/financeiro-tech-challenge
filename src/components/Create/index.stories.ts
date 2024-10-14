import type { Meta, StoryObj } from '@storybook/react'
import { Create } from '.'

const meta = {
  title: 'Components/Create',
  component: Create,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Create>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: true
  }
}
