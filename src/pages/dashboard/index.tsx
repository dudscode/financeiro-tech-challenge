'use client'

import Base from '@/templates/Base'
import { BalanceCard } from '@/components/BalanceCard'
import { TransactionCard } from '@/components/TransactionCard'
import { useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { useSaldo } from '@/hooks/useSaldo'
import { useTransaction } from '@/hooks/useTransaction'

export default function Home() {
  const { sendTransaction } = useTransaction()
  const { saldo, saldoCC, loading } = useSaldo()

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
