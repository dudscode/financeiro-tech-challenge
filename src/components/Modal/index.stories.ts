import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
// import { fn } from '@storybook/test'
import { Modal } from '.'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    bgColor: { control: 'color' }
  },
  args: {}
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    bgColor: '#e4ede3',
    width: 'auto',
    height: 'auto',
    children: 'Componenente'
  }
}
