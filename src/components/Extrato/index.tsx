import React from 'react'
import * as S from './styles'

export interface IExtratoProps {
  /**
   * title card
   */
  title: string
  /**
   * lista transações
   */
  transacao: ITransacao[]
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
  tipo: string
  /**
   * valor da transação
   */
  valor: string
}

export const Extrato = ({ title = 'Extrato', transacao = [] }: IExtratoProps) => {
  return (
    <S.Container>
      <S.Title variant='h2'>{title}</S.Title>
      <S.List>
        {transacao.map((item, index) => (
          <S.Item key={index}>
            <S.TextHighlight> {item.mes} </S.TextHighlight>
            <S.TextContaine>
              <S.Paragraph txt='16px'>{item.tipo}</S.Paragraph>
              <S.Paragraph txt='13px' type='info'>
                {item.data}
              </S.Paragraph>
            </S.TextContaine>
            <S.Paragraph txt='16px' md='8' weight='600'>
              {item.valor}
            </S.Paragraph>
            <S.Divider variant='fullWidth' />
          </S.Item>
        ))}
      </S.List>
    </S.Container>
  )
}
