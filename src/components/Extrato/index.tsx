import React from 'react'
import * as S from '@/components/Extrato/styles'
import CircularProgress from '@mui/material/CircularProgress'
import { useExtrato } from '@/hooks/useExtrato'
import { IExtratoProps } from '@/components/Extrato/types'
import { formatCurrency } from '@/components/Extrato/utils'
import { Modal } from '@/components/Extrato/components/Modal'
import { ButtonEdit, ButtonDelete } from '@/components/Extrato/components/Buttons'
import { useTransaction } from '@/hooks/useTransaction'

export const Extrato = ({ title = 'Extrato' }: IExtratoProps) => {
  useTransaction()
  const { extrato, loading, fetchData, openModal, onEdit, onDelete, item, setItem } = useExtrato()
  const hasExtrato = !!extrato.length

  return (
    <>
      <Modal item={item} type={openModal.type} setItem={setItem} openModal={openModal.status} fetchData={fetchData} />
      <S.Container>
        <S.Title variant='h2'>{title}</S.Title>
        {loading && <CircularProgress />}
        {!loading && hasExtrato && (
          <S.List>
            {[...extrato].reverse().map((item, index) => (
              <S.Item key={index}>
                <S.TextContainer>
                  <S.TextHighlight>{item.mes}</S.TextHighlight>
                  <S.ButtonContainer>
                    <ButtonEdit item={item} hasExtrato={hasExtrato} onEdit={onEdit} />
                    <ButtonDelete item={item} hasExtrato={hasExtrato} onDelete={onDelete} />
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
        )}
        {!loading && !hasExtrato && <S.Paragraph txt='16px'>Não existe nenhum extrato</S.Paragraph>}
      </S.Container>
    </>
  )
}
