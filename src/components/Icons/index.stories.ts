import type { Meta, StoryObj } from '@storybook/react';
import Icons from './index';

const meta: Meta<typeof Icons.Close> = {
  title: 'Components/Icons',
  component: Icons.Close,
  subcomponents: {
    Menu: Icons.Menu as React.ComponentType<unknown>,
    Account: Icons.Account as React.ComponentType<unknown>,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CloseIcon: Story = {
  args: {
    
  },
};

export const MenuIcon: Story = {
  args: {
    
  },

};

export const AccountIcon: Story = {
  args: {
    
  },
};