import type { Meta, StoryObj } from '@storybook/react'
import OtherServiceGrid from './index'

const meta: Meta<typeof OtherServiceGrid> = {
  title: 'Components/ServiceGrid',
  component: OtherServiceGrid,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
}
export default meta

type Story = StoryObj<typeof OtherServiceGrid>
export const Default: Story = {
  args: {}
}
