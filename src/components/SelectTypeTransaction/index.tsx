import React, { useState, useEffect } from 'react'
import { MenuItem, Select, FormControl } from '@mui/material'
import transactionsType from '@/config/transactions'
import { TransactionType } from '@/config/transactions'

interface SelectTypeTransactionProps {
  callback: (value: TransactionType) => void
  size?: string
  initialValue?: TransactionType
}

export const SelectTypeTransaction: React.FC<SelectTypeTransactionProps> = ({ callback, size, initialValue }) => {
  const [transactionType, setTransactionType] = useState<TransactionType | ''>(initialValue || '')

  useEffect(() => {
    if (initialValue) {
      setTransactionType(initialValue)
    }
  }, [initialValue])

  const selected = (e: any) => {
    setTransactionType(e.target.value as TransactionType)
    callback(e.target.value)
  }

  return (
    <FormControl fullWidth margin='normal' style={{ width: size || '100%' }}>
      <Select value={transactionType} onChange={selected} displayEmpty fullWidth>
        <MenuItem value='' disabled>
          Selecione o tipo de transação
        </MenuItem>
        {transactionsType.map((transaction, index) => {
          return (
            <MenuItem key={index} value={transaction.value}>
              {transaction.label}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}
