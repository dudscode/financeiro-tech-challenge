import type { Meta, StoryObj } from '@storybook/react';
import { Account } from './index';

const meta: Meta<typeof Account> = {
  title: 'Components/Account',
  component: Account,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Adicione os argumentos necessários para o componente Account, se houver
  },
};