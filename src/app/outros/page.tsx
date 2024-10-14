'use client'
import { BalanceCard } from '@/components/BalanceCard'
import GreyCard from '@/components/CardGrey'
import OtherServiceGrid from '@/components/OtherServices'
import Base from '@/templates/Base'

export default async function Home() {
  return (
    <Base>
      <BalanceCard name='Joana' date='Quinta-feira, 08/09/2022' balance={2500.0} />

      <GreyCard>
        <OtherServiceGrid />
      </GreyCard>
    </Base>
  )
}
