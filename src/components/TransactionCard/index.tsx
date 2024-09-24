'use client'
import React, { useState } from 'react'
import { Typography, MenuItem, Select, TextField, Button } from '@mui/material'
import * as S from './styles'
import useIsTablet from '@/hooks/useIsTablet'
import useIsMobile from '@/hooks/useIsMobile'


export interface ITransactionCardProps {
  onTransactionSubmit: (type: 'deposit' | 'transfer', amount: number) => void;
}

export const TransactionCard: React.FC<ITransactionCardProps> = ({ onTransactionSubmit }) => {
  const [transactionType, setTransactionType] = useState<'deposit' | 'transfer' | ''>('');
  const [amount, setAmount] = useState<string>('');
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();


  const formatCurrency = (value: string) => {
    const cleanValue = value
      .replace(/\D/g, '')
      .replace(/^0+/, '');

    const integerPart = cleanValue.slice(0, -2);
    const decimalPart = cleanValue.slice(-2);

    const formattedInteger = integerPart
      ? parseInt(integerPart, 10).toLocaleString('pt-BR')
      : '0';

    return `${formattedInteger},${decimalPart.padStart(2, '0')}`;
  };


  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    if (inputValue) {
      setAmount(formatCurrency(inputValue));
    } else {
      setAmount('');
    }
  };

  const handleSubmit = () => {

    const numericAmount = parseFloat(amount.replace(/\./g, '').replace(',', '.'));
    if (transactionType && numericAmount > 0) {
      onTransactionSubmit(transactionType, numericAmount);
    } else {
      alert('Por favor, selecione o tipo de transação e insira um valor válido.');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <Typography variant='h2' className='title'>
          Nova Transação
        </Typography>
      </S.Header>
      <S.FormContainer>
        <S.FormField>
          <Select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value as 'deposit' | 'transfer')}
            displayEmpty
            fullWidth
          >
            <MenuItem value="" disabled>
              Selecione o tipo de transação
            </MenuItem>
            <MenuItem value="deposit">Depósito</MenuItem>
            <MenuItem value="transfer">Transferência</MenuItem>
          </Select>
        </S.FormField>

        <S.FormField>
          <Typography variant='body1' className='label'>
            Valor
          </Typography>
          <TextField
            type="text"
            value={amount}
            onChange={handleAmountChange}
            placeholder="0,00"
            fullWidth
          />
        </S.FormField>

        <Button variant='contained' color='primary' onClick={handleSubmit}>
          Concluir transação
        </Button>
      </S.FormContainer>
        <>
          <S.BottomEdge src='/images/bottomtransaction.png' alt='Bottom Edge' />
          <S.TopEdge src='/images/toptransaction.png' alt='Top Edge' />
        </>
        {(isTablet || isMobile) && (
        <>
          <S.PersonCard src='/images/person-card.png' alt='Person Card' />
        </>
      )}
    </S.Container>
  );
};
