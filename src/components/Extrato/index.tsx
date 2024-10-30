import React, { useEffect, useState } from 'react'
import * as S from './styles'
import axios from 'axios'

export interface IExtratoProps {
  /**
   * title card
   */
  title: string
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
  valor: number
}


export const Extrato = ({ title = 'Extrato' }: IExtratoProps) => {
  const [extrato, setExtrato] = useState<ITransacao[]>([]);

  useEffect(() => {


    const fetchExtratoData = async () => {
      try {
        const response = await axios.get('/api/extrato')
        setExtrato(response.data)
      } catch (error) {
        console.error('Error fetching extrato data:', error)
      }
    }
    fetchExtratoData();
  }, []);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };
  return (
    <S.Container>
      <S.Title variant='h2'>{title}</S.Title>
      {extrato.length > 0 ? (
        <S.List >
        {extrato.map((item, index) => (
          <S.Item key={index}>
            <S.TextHighlight> {item.mes} </S.TextHighlight>
            <S.TextContaine>
              <S.Paragraph txt='16px'>{item.tipo}</S.Paragraph>
              <S.Paragraph txt='13px' type='info'>
                {item.data}
              </S.Paragraph>
            </S.TextContaine>
            <S.Paragraph txt='16px' md='8' weight='600'>
              {formatCurrency(item.valor)}
            </S.Paragraph>
            <S.Divider variant='fullWidth' />
          </S.Item>
        ))}
      </S.List>
      ) : (
        <S.Paragraph txt='16px'>Não existe nenhum extrato</S.Paragraph>
      )}
      
    </S.Container>
  )
}
