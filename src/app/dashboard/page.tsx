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
  const { saldo, saldoCC } = useSaldo()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    !!saldo.length && setLoading(false)
  }, [saldoCC])

  return (
    <Base>
      <BalanceCard saldo={saldoCC || { tipo: '', valor: 0 }} loading={loading} />
      <TransactionCard
        onTransactionSubmit={(type, amount) => {
          setLoading(true)
          sendTransaction(type, amount)
        }}
      />
    </Base>
  )
}
