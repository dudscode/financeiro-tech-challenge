import type { Meta, StoryObj } from '@storybook/react';
import { InvestmentsCard } from './index'; 


const meta: Meta<typeof InvestmentsCard> = {
  title: 'Components/InvestmentsCard',
  component: InvestmentsCard,
  parameters: {
    layout: 'centered', 
  },
  tags: ['autodocs'], 
  argTypes: {
    title: { control: 'text' },
    total: { control: 'text' },
    rendaVariavel: { control: 'text' },
    rendaFixa: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    title: 'Investimentos',
    total: '50.000,00',
    rendaVariavel: '14.000,00',
    rendaFixa: '36.000,00',
  },
};

export const CustomData: Story = {
  args: {
    title: 'Investimentos Personalizados',
    total: '100.000,00',
    rendaVariavel: '60.000,00',
    rendaFixa: '40.000,00',
  },
};

export const MobileView: Story = {
  args: {
    title: 'Investimentos para Mobile',
    total: '20.000,00',
    rendaVariavel: '5.000,00',
    rendaFixa: '15.000,00',
  },
};

export const NoInvestments: Story = {
  args: {
    title: 'Investimentos Vazio',
    total: '0,00',
    rendaVariavel: '0,00',
    rendaFixa: '0,00',
  },
};
