import type { Meta, StoryObj } from '@storybook/react'
import OtherServices from './index'

const meta: Meta<typeof OtherServices> = {
  title: 'Components/ServiceGrid',
  component: OtherServices,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
}
export default meta

type Story = StoryObj<typeof OtherServices>
export const Default: Story = {
  args: {}
}
