import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './index'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    list: [
      { id: '1', text: 'Opção 1' },
      { id: '2', text: 'Opção 2' },
      { id: '3', text: 'Opção 3' }
    ]
  }
}

export const Unique: Story = {
  args: {
    list: [
      {
        id: '1',
        text: 'Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.'
      }
    ]
  }
}

export const DefaultCheck: Story = {
  args: {
    list: [
      { id: '1', text: 'Opção 1' },
      { id: '2', text: 'Opção 2', checked: true },
      { id: '3', text: 'Opção 3' }
    ]
  }
}

export const Error: Story = {
  args: {
    list: [
      {
        id: '1',
        text: 'Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.'
      }
    ],
    error: true,
    errorMessage: 'Mensagem de erro'
  }
}
