'use client'
import React, { useState, useEffect } from 'react'
import { CircularProgress } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import * as S from './styles'
import useIsTablet from '@/hooks/useIsTablet'
import useIsMobile from '@/hooks/useIsMobile'
import useCurrencyFormatter from '@/hooks/useCurrencyFormatter'
import { useAuth } from '@/hooks/useAuth'

interface Auth {
  userName?: string
  access: boolean
  email?: string
}

interface Saldo {
  tipo: string
  valor: number
}

interface BalanceCardProps {
  saldo: Saldo
  loading: boolean
}

const formatCurrentDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }
  const date = new Date().toLocaleDateString('pt-BR', options)
  return date.charAt(0).toUpperCase() + date.slice(1)
}

export const BalanceCard: React.FC<BalanceCardProps> = ({ saldo, loading }) => {
  const { getSession } = useAuth()
  const auth = getSession()
  const [isVisible, setIsVisible] = useState(true)
  const [currentDate, setCurrentDate] = useState('')
  const [userName, setUserName] = useState('***')
  const isTablet = useIsTablet()
  const isMobile = useIsMobile()
  const { formatarValor } = useCurrencyFormatter()

  const mountUserName = (auth: Auth) => {
    if (auth.access) {
      const name: string = auth?.userName || ''
      setUserName(name.split(' ')[0])
    }
  }

  useEffect(() => {
    mountUserName(auth)
    setCurrentDate(formatCurrentDate())
  }, [])

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Text variant='h2' className='greeting'>
          Olá, {userName}! :)
        </S.Text>
        <S.Text variant='body2' className='date'>
          {currentDate}
        </S.Text>
      </S.Header>
      <S.BalanceContainer>
        {loading ? (
          <CircularProgress sx={{ color: 'white' }} />
        ) : (
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
              {isVisible && typeof saldo.valor !== 'string' ? formatarValor(saldo.valor) : '****'}
            </S.Text>
          </S.Balance>
        )}
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
