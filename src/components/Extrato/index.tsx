import React from 'react'
import './index.css'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import Divider from '@mui/material/Divider'

const StyledParagraph = styled('p')(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: '600'
}))

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
    <section className='container_extrato'>
      <Typography variant='h2' className='mb-24'>
        {title}
      </Typography>
      <ul className='container_transacao'>
        {transacao.map((item, index) => (
          <li key={index}>
            <StyledParagraph className='mb-8'> {item.mes} </StyledParagraph>
            <div className='container_transacao-tipo-valor mb-8'>
              <p className='txt-16'>{item.tipo}</p>
              <p className='txt-13 txt-info'>{item.data}</p>
            </div>
            <p className='txt-16 txt-semi-bold mb-8'>{item.valor}</p>
            <Divider className='divisor_transacao' variant='fullWidth' />
          </li>
        ))}
      </ul>
    </section>
  )
}
