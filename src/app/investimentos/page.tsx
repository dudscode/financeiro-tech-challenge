'use client'
import Base from '@/templates/Base'
import { InvestmentsCard } from '@/components/InvestmentsCard'
import { BalanceCard } from '@/components/BalanceCard'
export default async function Home() {
  return (
    <Base>
      <BalanceCard name='Joana' date='Quinta-feira, 08/09/2022' balance={2500.0} />

      <InvestmentsCard />
    </Base>
  )
}
