import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Link } from '.'

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Link',
    underline: "none"
  }
}
