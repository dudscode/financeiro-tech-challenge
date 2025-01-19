import Base from '@/templates/Base'
import { BalanceCard } from '@/components/BalanceCard'
import { TransactionCard } from '@/components/TransactionCard'
import { useSaldo } from '@/hooks/useSaldo'
import { useTransaction } from '@/hooks/useTransaction'

export default function Home() {
  const { sendTransaction } = useTransaction()
  const { saldoCC, loading } = useSaldo()

  return (
    <Base>
      <BalanceCard saldo={saldoCC} loading={loading} />
      <TransactionCard
        onTransactionSubmit={(type, amount, file, filename) => {
          sendTransaction(type, amount, file, filename)
        }}
      />
    </Base>
  )
}
