import type { Meta, StoryObj } from '@storybook/react'
import { TransactionCard, ITransactionCardProps } from './index'

const meta: Meta<ITransactionCardProps> = {
  title: 'Components/TransactionCard',
  component: TransactionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onTransactionSubmit: { action: 'submitted' },
  },
}
export default meta;

type Story = StoryObj<ITransactionCardProps>;
export const Default: Story = {
  args: {},
};
