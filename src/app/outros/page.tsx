'use client'
import Base from '@/templates/Base'
import OtherServices from '@/components/OtherServices'
import { BalanceCard } from '@/components/BalanceCard'

export default function Home() {
  return (
    <Base>
      <BalanceCard name='Joana' date='Quinta-feira, 08/09/2022' balance={2500.0} />

      <OtherServices />
    </Base>
  )
}
