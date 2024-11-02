'use client'
import Base from '@/templates/Base'
import { InvestmentsCard } from '@/components/InvestmentsCard'
import { BalanceCard } from '@/components/BalanceCard'
export default async function Home() {
  return (
    <Base>
      <BalanceCard />

      <InvestmentsCard />
    </Base>
  )
}
