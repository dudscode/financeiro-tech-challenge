import React, { useState } from 'react'
import { MenuItem, Select, FormControl } from '@mui/material'
export const SelectTypeTransaction = ({ callback }) => {
  const [transactionType, setTransactionType] = useState<'deposit' | 'transfer' | ''>('')

  const selected = (e: any) => {
    setTransactionType(e.target.value as 'deposit' | 'transfer')
    callback(e.target.value)
  }

  return (
    <FormControl fullWidth margin='normal'>
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
