import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from '.'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    color: 'secondary'
  }
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button'
  }
}

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button'
  }
}

export const FullButton: Story = {
  args: {
    children: 'Button',
    isFull: true
  }
}

export const LongButton: Story = {
  args: {
    children: 'Button',
    isLong: true
  }
}
