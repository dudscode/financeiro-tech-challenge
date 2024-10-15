import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '.'
import EditIcon from '@mui/icons-material/Edit'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'

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

export const StartIcon: Story = {
  args: {
    placeholder: 'Digite seu nome completo',
    label: 'Nome',
    message: 'Nome ok',
    error: false,
    startIcon: AccessTimeFilledIcon
  }
}

export const EndIcon: Story = {
  args: {
    placeholder: 'Digite seu nome completo',
    label: 'Nome',
    message: 'Nome ok',
    error: false,
    endIcon: EditIcon
  }
}

export const Password: Story = {
  args: {
    placeholder: 'Digite seu nome completo',
    label: 'Nome',
    error: false,
    type: 'password'
  }
}
