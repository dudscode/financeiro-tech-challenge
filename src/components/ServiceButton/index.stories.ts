import type { Meta, StoryObj } from '@storybook/react'
import ServiceButton from './index'

const meta: Meta<typeof ServiceButton> = {
  title: 'Components/ServiceButton',
  component: ServiceButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    // Add argTypes based on the props of ServiceButton component
    label: { control: 'text' },
    icon: { control: 'text' }
  }
}
export default meta

type Story = StoryObj<typeof ServiceButton>
export const Default: Story = {
  args: {}
}
