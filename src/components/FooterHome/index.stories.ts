import type { Meta, StoryObj } from '@storybook/react'
import { FooterHome } from '.'

const meta = {
  title: 'Components/FooterHome',
  component: FooterHome,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof FooterHome>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
