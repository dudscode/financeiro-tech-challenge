import React, { useEffect, useState } from 'react'
import * as S from './styles'
import axios from 'axios'
import { Button } from '@/components/Button'
import I from '@/components/Icons'
import { SelectTypeTransaction } from '@/components/SelectTypeTransaction'
import { DialogModal } from '@/components/Dialog'
import CircularProgress from '@mui/material/CircularProgress'

export interface IExtratoProps {
  title: string
}

export interface IType {
  deposi: string
  transfer: string
}

export interface ITransacao {
  mes: string
  data: string
  tipo: 'Depósito' | 'Transferência' | undefined
  valor: number
  id: string
}

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

const formatCurrencyWithoutNegative = (value: number): string => {
  const absoluteValue = Math.abs(value)
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(absoluteValue)
}

const getTransactionType = (type: string) => {
  if (type === 'deposit') {
    return 'Depósito'
  }
  if (type === 'transfer') {
    return 'Transferência'
  }
  return undefined
}

const getTransactionTypeValue = (
  type: 'Depósito' | 'Transferência' | undefined
): 'deposit' | 'transfer' | undefined => {
  if (type === 'Depósito') {
    return 'deposit'
  }
  if (type === 'Transferência') {
    return 'transfer'
  }
  return undefined
}

export const Extrato = ({ title = 'Extrato' }: IExtratoProps) => {
  const [extrato, setExtrato] = useState<ITransacao[]>([])
  const [item, setItem] = useState<ITransacao>({} as ITransacao)
  const [openModal, setOpenModal] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogMode, setDialogMode] = useState<'edit' | 'delete'>('edit')
  const [loading, setLoading] = useState(true)
  const hasExtrato = !!extrato.length

  const edit = (item: ITransacao) => {
    setItem(item)
    setDialogMode('edit')
    setOpenModal(true)
  }

  const deleted = (value: string | undefined) => {
    if (value === 'Ok') {
      fetchDeleteData()
      setOpenDialog(false)
      return
    }
    setOpenDialog(false)
  }

  const fetchEditData = async () => {
    try {
      await axios.patch('/api/extrato', {
        item
      })
      const response = await axios.get('/api/extrato')
      setExtrato(response.data)
    } catch (error) {
      console.error('Error fetching extrato data:', error)
    } finally {
      setOpenModal(false)
    }
  }
  const fetchDeleteData = async () => {
    try {
      await axios.delete('/api/extrato', {
        data: {
          id: item.id
        }
      })
      const response = await axios.get('/api/extrato')
      setExtrato(response.data)
    } catch (error) {
      console.error('Error fetching extrato data:', error)
    } finally {
      setOpenModal(false)
    }
  }

  useEffect(() => {
    const fetchExtratoData = async () => {
      try {
        const response = await axios.get('/api/extrato')
        setExtrato(response.data)
      } catch (error) {
        console.error('Error fetching extrato data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchExtratoData()
  }, [])

  return (
    <>
      <DialogModal open={openDialog} id='' onClose={value => deleted(value)} value='Ok' mode='delete'>
        Deseja realmente apagar o registro {item.id}?
      </DialogModal>
      <DialogModal
        open={openModal}
        id=''
        onClose={fetchEditData}
        value='Ok'
        mode='edit'
        title={`Deseja editar tipo de operação do item ${item.id} feito no dia ${item.data} com valor de ${formatCurrencyWithoutNegative(item.valor)}?`}
      >
        <S.List>
          <S.Item>
            <SelectTypeTransaction
              callback={(value: string) => setItem({ ...item, tipo: getTransactionType(value) })}
              size='100%'
              initialValue={getTransactionTypeValue(item.tipo)}
            />
          </S.Item>
        </S.List>
      </DialogModal>
      <S.Container>
        <S.TitleContainer>
          <S.Title variant='h2'>{title}</S.Title>
        </S.TitleContainer>
        {loading ? (
          <CircularProgress />
        ) : extrato.length > 0 ? (
          <S.List>
            {extrato.map((item, index) => (
              <S.Item key={index}>
                <S.TextContainer>
                  <S.TextHighlight>{item.mes}</S.TextHighlight>
                  <S.ButtonContainer>
                    <Button radius width='22px' onClick={() => edit(item)} disabled={!hasExtrato}>
                      <I.Edit fontSize='small' sx={{ fontSize: '14px' }} />
                    </Button>
                    <Button
                      radius
                      width='22px'
                      onClick={() => {
                        setItem(item)
                        setDialogMode('delete')
                        setOpenDialog(true)
                      }}
                      disabled={!hasExtrato}
                    >
                      <I.Delete fontSize='small' sx={{ fontSize: '14px' }} />
                    </Button>
                  </S.ButtonContainer>
                </S.TextContainer>
                <S.TextContainer>
                  <S.Paragraph txt='16px'>{item.tipo}</S.Paragraph>
                  <S.Paragraph txt='13px' type='info'>
                    {item.data}
                  </S.Paragraph>
                </S.TextContainer>
                <S.Paragraph>{formatCurrency(item.valor)}</S.Paragraph>
                <S.Divider variant='fullWidth' />
              </S.Item>
            ))}
          </S.List>
        ) : (
          <S.Paragraph txt='16px'>Não existe nenhum extrato</S.Paragraph>
        )}
      </S.Container>
    </>
  )
}
