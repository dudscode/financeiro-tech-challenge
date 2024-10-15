import type { Meta, StoryObj } from '@storybook/react'
import { Login } from '.'

const meta = {
  title: 'Components/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: true
  }
}
