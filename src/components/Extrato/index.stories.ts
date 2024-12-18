import type { Meta, StoryObj } from '@storybook/react'
import { Extrato } from './index' // Certifique-se de que o caminho está correto

// Define the metadata for the component stories
const meta: Meta<typeof Extrato> = {
  title: 'Components/Extrato',
  component: Extrato,
  parameters: {
    layout: 'centered' // Centers the component in the Canvas
  },
  tags: ['autodocs'], // For autodocs entry
  argTypes: {
    title: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Define the default story with some example arguments
export const Default: Story = {
  args: {
    title: 'Extrato de Transações',
  }
}

// Define additional stories with different arguments
export const Empty: Story = {
  args: {
    title: 'Extrato Vazio',
  }
}

export const SingleTransaction: Story = {
  args: {
    title: 'Extrato com Uma Transação'
  }
}
