'use client'

import Base from '@/templates/Base'
import { BalanceCard } from '@/components/BalanceCard'
import { TransactionCard } from '@/components/TransactionCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Transaction {
  mes: string
  tipo: string
  data: string
  valor: number
}

export default function Home() {
  const [saldo, setSaldo] = useState({ tipo: '', valor: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSaldoData = async () => {
      setLoading(true)
      try {
        const response = await axios.get('/api/saldo')
        const saldoData = response.data
        const totalSaldo = saldoData.reduce((acc: number, item: { valor: number }) => acc + item.valor, 0)
        setSaldo({ tipo: 'Conta Corrente', valor: totalSaldo })
      } catch (error) {
        console.error('Error fetching saldo data:', error)
        toast.error('Erro ao buscar dados do saldo.')
      } finally {
        setLoading(false)
      }
    }

    fetchSaldoData()
  }, [])

  const refreshSaldo = async (updatedSaldo: { tipo: string; valor: number }) => {
    try {
      await axios.put('/api/saldo', updatedSaldo)
      setSaldo(updatedSaldo)
      toast.success('Saldo atualizado com sucesso!')
    } catch (error) {
      console.error('Error updating saldo data:', error)
      toast.error('Erro ao atualizar dados do saldo.')
    }
  }

  const sendTransaction = async (transaction: Transaction) => {
    try {
      await axios.post('/api/extrato', transaction)
      const updatedSaldo = { tipo: saldo.tipo, valor: saldo.valor + transaction.valor }
      setSaldo(updatedSaldo)
      await refreshSaldo(updatedSaldo)
      toast.success('Transação efetuada com sucesso!')
    } catch (error) {
      console.error('Error saving user data:', error)
      toast.error('Erro ao efetuar transação. Tente novamente.')
    }
  }

  const formatMonth = () => {
    const data = new Date().toLocaleString('pt-BR', { month: 'long' })
    return data.charAt(0).toUpperCase() + data.slice(1)
  }

  return (
    <Base>
      <ToastContainer />
      <BalanceCard saldo={saldo} loading={loading} refreshSaldo={refreshSaldo} />
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
