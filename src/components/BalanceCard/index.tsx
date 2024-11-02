'use client'
import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import axios from 'axios'
import * as S from './styles'
import useIsTablet from '@/hooks/useIsTablet'
import useIsMobile from '@/hooks/useIsMobile'
import useCurrencyFormatter from '@/hooks/useCurrencyFormatter'

export interface IBalanceCardProps {}

interface Saldo {
  tipo: string
  valor: number
}

export const BalanceCard: React.FC<IBalanceCardProps> = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [currentDate, setCurrentDate] = useState('')
  const [saldo, setSaldo] = useState<Saldo>({ tipo: '', valor: 0 })
  const [userName, setUserName] = useState('***')
  const isTablet = useIsTablet()
  const isMobile = useIsMobile()
  const { formatarValor } = useCurrencyFormatter()

  useEffect(() => {
    const fetchSaldoData = async () => {
      try {
        const response = await axios.get('/api/saldo')
        const saldoData = response.data[0]
        setSaldo(saldoData)
      } catch (error) {
        console.error('Error fetching saldo data:', error)
      }
    }

    const fetchUserName = () => {
      if (typeof window !== 'undefined') {
        const auth = sessionStorage.getItem('auth')
        if (auth) {
          const name = JSON.parse(auth).userName
          setUserName(name.split(' ')[0])
        }
      }
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

    fetchSaldoData()
    fetchUserName()
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
