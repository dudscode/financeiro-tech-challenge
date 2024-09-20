import type { Meta, StoryObj } from '@storybook/react'
import { BalanceCard, IBalanceCardProps } from './index'

const meta: Meta<IBalanceCardProps> = {
  title: 'Components/BalanceCard',
  component: BalanceCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    date: { control: 'text' },
    balance: { control: 'number' }
  },
  args: {
    name: 'Joana',
    date: 'Quinta-feira, 08/09/2022',
    balance: 2500.0
  }
}

export default meta
type Story = StoryObj<IBalanceCardProps>

export const Default: Story = {
  args: {}
}
