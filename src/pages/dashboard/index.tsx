'use client'

import Base from '@/templates/Base'
import { BalanceCard } from '@/components/BalanceCard'
import { TransactionCard } from '@/components/TransactionCard'
import { useSaldo } from '@/hooks/useSaldo'
import { useTransaction } from '@/hooks/useTransaction'
// import { useEffect } from 'react'
// import Api from '@/modulos/common/server/api'
// import axios from 'axios'

export default function Home() {
  const { sendTransaction } = useTransaction()
  const { saldoCC, loading } = useSaldo()

  // useEffect(() => {
  //   const value = {
  //     mes: 'Janeiro',
  //     tipo: 'transfer',
  //     data: '12/01/2025',
  //     valor: -10
  //   }
  // axios
  //   .get(`/api/account`)
  //   .then(data => {
  //     console.log('data: ', data)
  //   })
  //   .catch(error => {
  //     console.log('error: ', error)
  //   })
  // axios
  //   .post(`/api/account/transaction`, value)
  //   .then(data => {
  //     console.log('data: ', data)
  //   })
  //   .catch(error => {
  //     console.log('error: ', error)
  //   })
  // axios
  //   .get(`/api/account/67607174f840bb97892eb669/statement`)
  //   .then(data => {
  //     console.log('data: ', data)
  //   })
  //   .catch(error => {
  //     console.log('error: ', error)
  //   })
  // axios
  //   .post(`/api/user`, {
  //     username: 'Aluno Carequinha',
  //     email: 'teste@gmail.com',
  //     password: 'testes'
  //   })
  //   .then(data => {
  //     console.log('data: ', data)
  //   })
  //   .catch(error => {
  //     console.log('error: ', error)
  //   })
  // axios
  //   .post(`/api/user/auth`, {
  //     email: 't2este@gmail.com',
  //     password: 'testes'
  //   })
  //   .then(data => {
  //     console.log('data: ', data)
  //   })
  //   .catch(error => {
  //     console.log('error: ', error)
  //   })
  // }, [])

  return (
    <Base>
      <BalanceCard saldo={saldoCC} loading={loading} />
      <TransactionCard
        onTransactionSubmit={(type, amount) => {
          sendTransaction(type, amount)
        }}
      />
    </Base>
  )
}
