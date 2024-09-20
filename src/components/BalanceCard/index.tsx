import React, { useState } from 'react'
import * as S from './styles'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

export type BalanceCardProps = {
  name: string
  date: string
  balance: number
}

const BalanceCard: React.FC<BalanceCardProps> = ({ name, date, balance }) => {
  const [isVisible, setIsVisible] = useState(true)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Greeting>Olá, {name}! :)</S.Greeting>
        <S.Date>{date}</S.Date>
      </S.Header>
      <S.BalanceContainer>
        <S.Balance>
          <S.BalanceHeader>
            <S.BalanceTitle>Saldo</S.BalanceTitle>
            <S.VisibilityIcon onClick={toggleVisibility} isVisible={isVisible}>
              {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </S.VisibilityIcon>
          </S.BalanceHeader>
          <S.BalanceLine />
          <S.AccountType>Conta Corrente</S.AccountType>
          <S.BalanceAmount>R$ {isVisible ? balance.toFixed(2) : '****'}</S.BalanceAmount>
        </S.Balance>
      </S.BalanceContainer>
    </S.Container>
  )
}

export default BalanceCard
