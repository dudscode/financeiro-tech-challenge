'use client'

import Base from '@/templates/Base'
import { BalanceCard } from '@/components/BalanceCard'
import { TransactionCard } from '@/components/TransactionCard'

export default function Home() {
  return (
    <Base>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
        <BalanceCard name='Joana' date='Quinta-feira, 08/09/2022' balance={2500.0} />
        <TransactionCard
          onTransactionSubmit={function (type: 'deposit' | 'transfer', amount: number): void {
            throw new Error('Function not implemented.')
          }}
        />
      </div>
    </Base>
  )
}
