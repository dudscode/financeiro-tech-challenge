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
        console.error('Error fetching user data:', error)
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

  }, [])


  return (
    <Base>
      <BalanceCard name={userName} date='Quinta-feira, 08/09/2022' balance={saldo.valor} />
      <TransactionCard
        onTransactionSubmit={function (type: 'deposit' | 'transfer', amount: number): void {
          throw new Error('Function not implemented.')
        }}
      />
    </Base>
  )
}
