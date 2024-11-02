'use client'

import Base from '@/templates/Base'
import { BalanceCard } from '@/components/BalanceCard'
import { TransactionCard } from '@/components/TransactionCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Saldo {
  tipo: string
  valor: number
}

interface Transaction {
  mes: string
  tipo: string
  data: string
  valor: number
}

export default function Home() {
  const [saldo, setSaldo] = useState<Saldo>({ tipo: '', valor: 0 })
  const [userName, setUserName] = useState('***')

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

    fetchSaldoData()
    fetchUserName()
  }, [])

  const refreshSaldo = async (updatedSaldo: Saldo) => {
    try {
      await axios.put('/api/saldo', updatedSaldo)
    } catch (error) {
      console.error('Error updating saldo data:', error)
    }
  }

  const sendTransaction = async (transaction: Transaction) => {
    try {
      await axios.post('/api/extrato', transaction)
      const updatedSaldo = { tipo: saldo.tipo, valor: saldo.valor + transaction.valor }
      setSaldo(updatedSaldo)
      await refreshSaldo(updatedSaldo)
      alert('Transação efetuada com sucesso!')
    } catch (error) {
      console.error('Error saving user data:', error)
      alert('Erro ao efetuar transação. Tente novamente.')
    }
  }

  const formatMonth = () => {
    const data = new Date().toLocaleString('pt-BR', { month: 'long' })
    return data.charAt(0).toUpperCase() + data.slice(1)
  }

  return (
    <Base>
      <BalanceCard name={userName} date='Quinta-feira, 08/09/2022' balance={saldo.valor} />
      <TransactionCard
        onTransactionSubmit={(type: 'deposit' | 'transfer', amount: number) => {
          sendTransaction({
            mes: formatMonth(),
            tipo: type === 'deposit' ? 'Depósito' : 'Transferência',
            data: new Date().toLocaleDateString(),
            valor: type === 'transfer' ? -amount : amount
          })
        }}
      />
    </Base>
  )
}
