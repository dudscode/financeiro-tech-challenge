import React, { useState, useEffect } from 'react'
import { MenuItem, Select, FormControl } from '@mui/material'

interface SelectTypeTransactionProps {
  callback: (value: string) => void
  size?: string
  initialValue?: 'deposit' | 'transfer'
}

export const SelectTypeTransaction: React.FC<SelectTypeTransactionProps> = ({ callback, size, initialValue }) => {
  const [transactionType, setTransactionType] = useState<'deposit' | 'transfer' | ''>(initialValue || '')

  useEffect(() => {
    if (initialValue) {
      setTransactionType(initialValue)
    }
  }, [initialValue])

  const selected = (e: any) => {
    setTransactionType(e.target.value as 'deposit' | 'transfer')
    callback(e.target.value)
  }

  return (
    <FormControl fullWidth margin='normal' style={{ width: size || '100%' }}>
      <Select value={transactionType} onChange={selected} displayEmpty fullWidth>
        <MenuItem value='' disabled>
          Selecione o tipo de transação
        </MenuItem>
        <MenuItem value='deposit'>Depósito</MenuItem>
        <MenuItem value='transfer'>Transferência</MenuItem>
      </Select>
    </FormControl>
  )
}
