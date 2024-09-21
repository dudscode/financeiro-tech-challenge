'use client'
import React, { useState } from 'react'
import { Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import * as S from './styles'
import useIsTablet from '@/hooks/useIsTablet'
import useIsMobile from '@/hooks/useIsMobile'
import useCurrencyFormatter from '@/hooks/useCurrencyFormatter'

export interface IBalanceCardProps {
  name: string
  date: string
  balance: number
}

export const BalanceCard: React.FC<IBalanceCardProps> = ({ name, date, balance }) => {
  const [isVisible, setIsVisible] = useState(true)
  const isTablet = useIsTablet()
  const isMobile = useIsMobile()
  const { formatarValor } = useCurrencyFormatter()
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  return (
    <S.Container>
      <S.Header>
        <S.Text variant='h2' className='greeting'>
          Olá, {name}! :)
        </S.Text>
        <S.Text variant='body2' className='date'>
          {date}
        </S.Text>
      </S.Header>
      <S.BalanceContainer>
        <S.Balance>
          <S.BalanceHeader>
            <S.Text variant='h3' className='balance-title'>
              Saldo
            </S.Text>
            <S.VisibilityIconWrapper onClick={toggleVisibility} isVisible={isVisible}>
              {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </S.VisibilityIconWrapper>
          </S.BalanceHeader>
          <S.BalanceLine isVisible={isVisible} />
          <S.Text variant='body1' className='account-type'>
            Conta Corrente
          </S.Text>
          <S.Text variant='h1' className='balance-amount'>
            {isVisible ? formatarValor(balance) : '****'}
          </S.Text>
        </S.Balance>
      </S.BalanceContainer>
      {(isTablet || isMobile) && (
        <>
          <S.BottomEdge src='/images/bottom-edge.png' alt='Bottom Edge' />
          <S.TopEdge src='/images/top-edge.png' alt='Top Edge' />
          <S.PersonWithCoin src='/images/person-with-coin.png' alt='Person with Coin' />
        </>
      )}
    </S.Container>
  )
}
