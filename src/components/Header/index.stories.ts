import type { Meta, StoryObj } from '@storybook/react'
import { Header } from '.'

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
