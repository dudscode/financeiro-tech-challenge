import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '.'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Digite seu nome completo',
    label: 'Nome'
  }
}

export const Error: Story = {
  args: {
    placeholder: 'Digite seu nome completo',
    label: 'Nome',
    message: 'Nome inválido',
    error: true
  }
}

export const Success: Story = {
  args: {
    placeholder: 'Digite seu nome completo',
    label: 'Nome',
    message: 'Nome ok',
    error: false
  }
}
