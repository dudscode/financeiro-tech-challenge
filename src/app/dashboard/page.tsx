'use client'

import Base from '@/templates/Base'
import { BalanceCard } from '@/components/BalanceCard'
import { TransactionCard } from '@/components/TransactionCard'
import { useSaldo } from '@/hooks/useSaldo'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function Home() {
  const [saldo, setSaldo] = useState({
    tipo: '',
    valor: ''
  });



  const [userName, setUserName] = useState('***');

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
    fetchSaldoData();



    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem('auth');
      if (auth) {
        const name = JSON.parse(auth).userName;
        setUserName(name.split(' ')[0]);
      }
    };

  }, []);
  const refreshSaldo = async (updatedSaldo: {}) => {
    try {
      const response = await axios.put('/api/saldo', updatedSaldo)
      console.log('Sucess update saldo data:', response)
    } catch (error) {
      console.error('Error update saldo data:', error)
    }
  }

  const sendTransaction = async (transaction: any) => {
    try {
      const response = await axios.post('/api/extrato', transaction)
      console.log(response.data)
      const updatedSaldo = { tipo: saldo.tipo, valor: saldo.valor + transaction.valor }
      setSaldo(updatedSaldo);
      await refreshSaldo(updatedSaldo);
      alert('Transação efetuada com sucesso!')
    } catch (error) {
      console.error('Error saving user data:', error)
      alert('Erro ao efetuar transação. Tente novamente.')
    }
  }

  const formatMonth = () => {
    var data = new Date().toLocaleString('pt-BR', { month: 'long' })
    return data[0].toUpperCase() + data.substring(1)
  }


  return (
    <Base>
      <BalanceCard name={userName} date='Quinta-feira, 08/09/2022' balance={saldo.valor} />
      <TransactionCard
        onTransactionSubmit={function (type: 'deposit' | 'transfer', amount: number): void {
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