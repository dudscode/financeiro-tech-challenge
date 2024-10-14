import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { FullModal } from '.'

const meta = {
  title: 'Components/FullModal',
  component: FullModal,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FullModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Olaaaa',
    initialState: true
  }
}
