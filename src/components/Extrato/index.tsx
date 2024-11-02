import React, { useEffect, useState } from 'react'
import * as S from './styles'
import axios from 'axios'
import { FullModal } from '@/components/FullModal'
import { Button } from '@/components/Button'
import I from '@/components/Icons'
import { SelectTypeTransaction } from '@/components/SelectTypeTransaction'
import { DialogModal } from '@/components/Dialog'

export interface IExtratoProps {
  /**
   * title card
   */
  title: string
}

export interface IType {
  deposi: string
  transfer: string
}

export interface ITransacao {
  /**
   * mês da transação
   */
  mes: string
  /**
   * data da transação
   */
  data: string
  /**
   * tipo da transação
   */
  tipo: 'Depósito' | 'Transferência' | undefined
  /**
   * valor da transação
   */
  valor: number
  /**
   * id da transação
   */
  id: string
}

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
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

export const Extrato = ({ title = 'Extrato' }: IExtratoProps) => {
  const [extrato, setExtrato] = useState<ITransacao[]>([])
  const [item, setItem] = useState<ITransacao>({} as ITransacao)
  const [openModal, setOpenModal] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const hasExtrato = !!extrato.length

  const edit = (item: ITransacao) => {
    setItem(item)
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
      }
    }
    fetchExtratoData()
  }, [])

  return (
    <>
      <DialogModal open={openDialog} id='' onClose={value => deleted(value)} value='Ok'>
        Deseja realmente apagar o registro {item.id}?
      </DialogModal>
      <S.Container>
        <S.TitleContainer>
          <S.Title variant='h2'>{title}</S.Title>
        </S.TitleContainer>
        {extrato.length > 0 ? (
          <S.List>
            {extrato.map((item, index) => (
              <S.Item key={index}>
                <S.TextContaine>
                  <S.TextHighlight>{item.mes}</S.TextHighlight>
                  <S.ButtonContainer>
                    <Button radius width='30px' onClick={() => edit(item)} disabled={!hasExtrato}>
                      <I.Edit fontSize='small' />
                    </Button>
                    <Button
                      radius
                      width='30px'
                      onClick={() => {
                        setItem(item)
                        setOpenDialog(true)
                      }}
                      disabled={!hasExtrato}
                    >
                      <I.Delete fontSize='small' sx={{ fontSize: '17px' }} />
                    </Button>
                  </S.ButtonContainer>
                </S.TextContaine>
                <S.TextContaine>
                  <S.Paragraph txt='16px'>{item.tipo}</S.Paragraph>
                  <S.Paragraph txt='13px' type='info'>
                    {item.data}
                  </S.Paragraph>
                </S.TextContaine>
                <S.Paragraph>{formatCurrency(item.valor)}</S.Paragraph>
                <S.Divider variant='fullWidth' />
              </S.Item>
            ))}
          </S.List>
        ) : (
          <S.Paragraph txt='16px'>Não existe nenhum extrato</S.Paragraph>
        )}
      </S.Container>
      <FullModal state={openModal} callback={() => setOpenModal(false)}>
        <S.List>
          <S.TitleContainer>
            <S.Title variant='h2'>Extrato</S.Title>
            <Button onClick={fetchEditData}>Salvar</Button>
          </S.TitleContainer>
          <S.Item>
            <S.TextHighlight> {item.mes} </S.TextHighlight>
            <S.TextContaine>
              <SelectTypeTransaction
                callback={(value: string) => setItem({ ...item, tipo: getTransactionType(value) })}
              />
              <S.Paragraph txt='13px' type='info'>
                {item.data}
              </S.Paragraph>
            </S.TextContaine>
            <S.Paragraph>{formatCurrency(item.valor)}</S.Paragraph>
          </S.Item>
        </S.List>
      </FullModal>
    </>
  )
}
