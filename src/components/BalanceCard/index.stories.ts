import type { Meta, StoryObj } from '@storybook/react'
import { BalanceCard } from './index'

const meta: Meta<typeof BalanceCard> = {
  title: 'Components/BalanceCard',
  component: BalanceCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}
export default meta

type Story = StoryObj<typeof BalanceCard>

export const Default: Story = {}
