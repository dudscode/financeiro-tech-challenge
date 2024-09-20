import React, { useState } from 'react'
import { Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import * as S from './styles'

export interface IBalanceCardProps {
  name: string
  date: string
  balance: number
}

export const BalanceCard = ({ name, date, balance }: IBalanceCardProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Text variant='h2' style={{ fontSize: '25px', fontWeight: 600, lineHeight: '30.26px' }}>
          Olá, {name}! :)
        </S.Text>
        <S.Text variant='body2' style={{ fontSize: '13px', fontWeight: 400, lineHeight: '15.73px' }}>
          {date}
        </S.Text>
      </S.Header>
      <S.BalanceContainer>
        <S.Balance>
          <S.BalanceHeader>
            <S.Text variant='h3' style={{ fontSize: '20px', fontWeight: 600, lineHeight: '24.2px' }}>
              Saldo
            </S.Text>
            <S.VisibilityIconWrapper onClick={toggleVisibility} isVisible={isVisible}>
              {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </S.VisibilityIconWrapper>
          </S.BalanceHeader>
          <S.BalanceLine />
          <S.Text variant='body1' style={{ fontSize: '16px', fontWeight: 400, lineHeight: '19.36px' }}>
            Conta Corrente
          </S.Text>
          <S.Text variant='h1' style={{ fontSize: '31px', fontWeight: 400, lineHeight: '37.52px' }}>
            R$ {isVisible ? balance.toFixed(2) : '****'}
          </S.Text>
        </S.Balance>
      </S.BalanceContainer>
    </S.Container>
  )
}
