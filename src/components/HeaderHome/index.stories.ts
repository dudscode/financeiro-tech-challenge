import type { Meta, StoryObj } from '@storybook/react'
import { HeaderHome } from '.'

const meta = {
  title: 'Components/HeaderHome',
  component: HeaderHome,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof HeaderHome>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
   callback : () => console.log('teste'), 
  }
}
