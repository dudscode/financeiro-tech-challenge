import type { Meta, StoryObj } from '@storybook/react'
// import { fn } from '@storybook/test'
import { Menu } from '.'

const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    list: { control: 'object' }
  },
  args: {}
} satisfies Meta<typeof Menu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    list: [
      { url: '/dashboard', label: 'Início' },
      { url: '/tranferencia', label: 'Tranferências' },
      { url: '/investimentos', label: 'Investimentos' },
      { url: '/outros', label: 'Outros serviços' }
    ]
  }
}
export const Horizontal: Story = {
  args: {
    list: [
      { url: '/dashboard', label: 'Início' },
      { url: '/tranferencia', label: 'Tranferências' },
      { url: '/investimentos', label: 'Investimentos' },
      { url: '/outros', label: 'Outros serviços' }
    ],
    isHorizontal: true
  }
}
