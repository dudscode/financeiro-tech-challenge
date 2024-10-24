import type { Meta, StoryObj } from '@storybook/react'
import GreyCard from './index'

const meta: Meta<typeof GreyCard> = {
  title: 'Components/GreyCard',
  component: GreyCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
}
export default meta

type Story = StoryObj<typeof GreyCard>
export const Default: Story = {
  args: {}
}
