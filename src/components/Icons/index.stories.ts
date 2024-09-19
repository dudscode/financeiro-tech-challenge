import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '.'

const meta = {
  title: 'Components/Icons',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Account: Story = {
  args: {
    icon: 'account',
    alt: 'account'
  }
}

export const Menu: Story = {
  args: {
    icon: 'menu',
    alt: 'menu'
  }
}
