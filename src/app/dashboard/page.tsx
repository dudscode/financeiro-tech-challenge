'use client'

import Base from '@/templates/Base'
import { BalanceCard } from '@/components/BalanceCard'
import { TransactionCard } from '@/components/TransactionCard'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSaldo } from '@/hooks/useSaldo'
import { useTransaction } from '@/hooks/useTransaction'

export default function Home() {
  const { sendTransaction } = useTransaction()
  const { saldo, refreshSaldo, getSaldoCC } = useSaldo('cc')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    saldo && setLoading(false)
  }, [saldo])

  const onTransaction = async (type: 'deposit' | 'transfer', amount: number): Promise<void> => {
    try {
      console.log('akiiii')
      setLoading(true)
      await sendTransaction(type, amount)
      await getSaldoCC()
      toast.success('Transação efetuada com sucesso!')
    } catch (error) {
      console.error('Error saving user data:', error)
      toast.error('Erro ao efetuar transação. Tente novamente.')
    }
  }

  return (
    <Base>
      <BalanceCard saldo={saldo || { tipo: '', valor: 0 }} loading={loading} refreshSaldo={refreshSaldo} />
      <TransactionCard
        onTransactionSubmit={(type, amount) => {
          onTransaction(type, amount)
        }}
      />
    </Base>
  )
}
