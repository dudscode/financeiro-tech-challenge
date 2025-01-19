import React, { useState } from 'react'
import { MenuItem, Select, Grid2 as Grid, FormControl, Button } from '@mui/material'
import * as S from './styles'
import GreyCard from '../CardGrey'
import { toast } from 'react-toastify'
import { formatCurrency } from '@/components/TransactionCard/utils'
import transactionsType, { TransactionType } from '@/config/transactions'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
export interface ITransactionCardProps {
  onTransactionSubmit: (type: TransactionType, amount: number, file: string, filename: string) => void
}

interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & EventTarget & { files: FileList }
}

export const TransactionCard: React.FC<ITransactionCardProps> = ({ onTransactionSubmit }) => {
  const [transactionType, setTransactionType] = useState<TransactionType | ''>('')
  const [amount, setAmount] = useState<string>('')
  const [file, setFile] = useState<string>('')
  const [filename, setFilename] = useState<string>('')

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, '')
    if (inputValue) {
      setAmount(formatCurrency(inputValue))
    } else {
      setAmount('')
    }
  }

  const handleFileChange = (e: FileChangeEvent) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast.error('O arquivo deve ter no máximo 5MB.')
        return
      }
      const validTypes = ['application/pdf', 'image/jpeg', 'image/png']
      if (!validTypes.includes(selectedFile.type)) {
        toast.error('Apenas arquivos PDF, JPG e PNG são permitidos.')
        return
      }
      const reader = new FileReader()
      reader.onload = event => {
        setFile(reader?.result?.toString().split(',')[1] ?? '')
        setFilename(selectedFile.name)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleSubmit = () => {
    const numericAmount = parseFloat(amount.replace(/\./g, '').replace(',', '.'))
    if (!transactionType || numericAmount <= 0) {
      toast.error('Por favor, selecione o tipo de transação e insira um valor válido.')
    } else {
      onTransactionSubmit(transactionType, numericAmount, file, filename)
    }

    setTransactionType('')
    setAmount('')
    setFile('')
    setFilename('')
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
                onChange={e => setTransactionType(e.target.value as TransactionType)}
                displayEmpty
                fullWidth
              >
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
          </Grid>
          <Grid size={{ xs: 6, md: 6 }} offset={{ xs: 3, sm: 0, md: 0 }}>
            <FormControl fullWidth margin='normal'>
              <S.TransactionAmountLabel variant='body1'>Valor</S.TransactionAmountLabel>
              <S.AmountInput type='text' value={amount} onChange={handleAmountChange} placeholder='0,00' fullWidth />
            </FormControl>
          </Grid>{' '}
          <Grid size={{ xs: 12, sm: 12, md: 12 }}></Grid>
          <Grid size={{ xs: 6, md: 6 }} offset={{ xs: 3, sm: 0, md: 0 }}>
            <FormControl fullWidth margin='normal'>
              <Button
                component='label'
                variant='contained'
                startIcon={<CloudUploadIcon />}
                color={filename ? 'success' : 'secondary'}
              >
                Upload File
                <S.VisuallyHiddenInput type='file' accept='.pdf, .jpg, .jpeg, .png' onChange={handleFileChange} />
              </Button>
            </FormControl>
          </Grid>
          <S.FilenameRow size={{ xs: 12, sm: 12, md: 12 }}>{filename ? `File: ${filename}` : ''}</S.FilenameRow>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}></Grid>
          <S.ButtonRow size={{ xs: 6, md: 6 }} offset={{ xs: 3, sm: 0, md: 0 }}>
            <S.SubmitButton
              variant='contained'
              color='primary'
              onClick={handleSubmit}
              size='large'
              disabled={!amount || amount === '0,00'}
            >
              Concluir transação
            </S.SubmitButton>
          </S.ButtonRow>
          <S.PersonImage src='./images/person-card.svg' alt='' />
        </Grid>
      </S.TransactionContainer>
    </GreyCard>
  )
}
