import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '.'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen'
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
    message: {
      error: 'Nome inválido'
    },
    status: 'error'
  }
}

export const Success: Story = {
  args: {
    placeholder: 'Digite seu nome completo',
    label: 'Nome',
    message: {
      success: 'Nome ok'
    },
    status: 'success'
  }
}
export const Warning: Story = {
  args: {
    placeholder: 'Digite seu nome completo',
    label: 'Nome',
    message: {
      warning: 'Nome já existe'
    },
    status: 'warning'
  }
}
