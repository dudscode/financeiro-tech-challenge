'use client'
import Base from '@/templates/Base'
import OtherServices from '@/components/OtherServices'
import { BalanceCard } from '@/components/BalanceCard'

export default function Home() {
  return (
    <Base>
      <BalanceCard />

      <OtherServices />
    </Base>
  )
}
