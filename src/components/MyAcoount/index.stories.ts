import type { Meta, StoryObj } from '@storybook/react'
import { MyAccount } from './index'

const meta: Meta = {
  title: 'Components/MyAccount',
  component: MyAccount,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {}
}
export default meta

type Story = StoryObj

export const Default: Story = {
  args: {}
}

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {}
}

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  },
  args: {}
}
