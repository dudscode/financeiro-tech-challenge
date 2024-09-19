import type { Meta, StoryObj } from '@storybook/react'
import { Account } from '.'

const meta = {
  title: 'Components/Account',
  component: Account,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof Account>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
