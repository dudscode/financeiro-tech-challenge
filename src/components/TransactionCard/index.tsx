'use client'
import React, { useState } from 'react'
import { MenuItem, Select, Grid2 as Grid, FormControl } from '@mui/material'
import * as S from './styles'
import GreyCard from '../CardGrey'
export interface ITransactionCardProps {
  onTransactionSubmit: (type: 'deposit' | 'transfer', amount: number) => void
}

export const TransactionCard: React.FC<ITransactionCardProps> = ({ onTransactionSubmit }) => {
  const [transactionType, setTransactionType] = useState<'deposit' | 'transfer' | ''>('')
  const [amount, setAmount] = useState<string>('')

  const formatCurrency = (value: string) => {
    const cleanValue = value.replace(/\D/g, '').replace(/^0+/, '')

    const integerPart = cleanValue.slice(0, -2)
    const decimalPart = cleanValue.slice(-2)

    const formattedInteger = integerPart ? parseInt(integerPart, 10).toLocaleString('pt-BR') : '0'

    return `${formattedInteger},${decimalPart.padStart(2, '0')}`
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, '')
    if (inputValue) {
      setAmount(formatCurrency(inputValue))
    } else {
      setAmount('')
    }
  }

  const handleSubmit = () => {
    const numericAmount = parseFloat(amount.replace(/\./g, '').replace(',', '.'))
    if (transactionType && numericAmount > 0) {
      onTransactionSubmit(transactionType, numericAmount)
    } else {
      alert('Por favor, selecione o tipo de transação e insira um valor válido.')
    }
  }

  return (
    <GreyCard cardType='alternative'>
      <S.TransactionContainer>
        <S.TransactionCardHeader variant='h2'>Nova Transação</S.TransactionCardHeader>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 8, md: 8 }}>
            <FormControl fullWidth margin='normal'>
              <Select
                value={transactionType}
                onChange={e => setTransactionType(e.target.value as 'deposit' | 'transfer')}
                displayEmpty
                fullWidth
              >
                <MenuItem value='' disabled>
                  Selecione o tipo de transação
                </MenuItem>
                <MenuItem value='deposit'>Depósito</MenuItem>
                <MenuItem value='transfer'>Transferência</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 6, md: 6 }} offset={{ xs: 3, sm: 0, md: 0 }}>
            <FormControl fullWidth margin='normal'>
              <S.TransactionAmountLabel variant='body1'>Valor</S.TransactionAmountLabel>
              <S.AmountInput type='text' value={amount} onChange={handleAmountChange} placeholder='0,00' fullWidth />
            </FormControl>
          </Grid>{' '}
          <Grid size={{ xs: 12, sm: 12, md: 12 }}></Grid>
          <S.ButtonRow size={{ xs: 6, md: 6 }} offset={{ xs: 3, sm: 0, md: 0 }}>
            <S.SubmitButton variant='contained' color='primary' onClick={handleSubmit} size='large'>
              Concluir transação
            </S.SubmitButton>
          </S.ButtonRow>
          <S.PersonImage src='./images/person-card.svg' alt='' />
        </Grid>
      </S.TransactionContainer>
    </GreyCard>
  )
}
