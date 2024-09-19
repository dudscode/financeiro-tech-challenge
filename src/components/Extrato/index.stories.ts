import type { Meta, StoryObj } from '@storybook/react'
import { Extrato, IExtratoProps } from './index' // Certifique-se de que o caminho está correto

// Define the metadata for the component stories
const meta: Meta<typeof Extrato> = {
  title: 'Components/Extrato',
  component: Extrato,
  parameters: {
    layout: 'centered' // Centers the component in the Canvas
  },
  tags: ['autodocs'], // For autodocs entry
  argTypes: {
    title: { control: 'text' },
    transacao: { control: 'object' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Define the default story with some example arguments
export const Default: Story = {
  args: {
    title: 'Extrato de Transações',
    transacao: [
      { mes: 'Janeiro', data: '01/01/2024', tipo: 'Crédito', valor: 'R$ 200,00' },
      { mes: 'Fevereiro', data: '15/02/2024', tipo: 'Débito', valor: 'R$ 150,00' },
      { mes: 'Março', data: '10/03/2024', tipo: 'Crédito', valor: 'R$ 300,00' }
    ]
  }
}

// Define additional stories with different arguments
export const Empty: Story = {
  args: {
    title: 'Extrato Vazio',
    transacao: []
  }
}

export const SingleTransaction: Story = {
  args: {
    title: 'Extrato com Uma Transação',
    transacao: [{ mes: 'Abril', data: '05/04/2024', tipo: 'Crédito', valor: 'R$ 100,00' }]
  }
}
