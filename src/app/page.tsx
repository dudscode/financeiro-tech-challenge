'use client'

import Base from '@/templates/Base'
import { BalanceCard } from '@/components/BalanceCard'
import useIsTablet from '@/hooks/useIsTablet'
import useIsMobile from '@/hooks/useIsMobile'

export default function Home() {
  const isTablet = useIsTablet()
  const isMobile = useIsMobile()

  return (
    <Base>
      <div
        style={{ display: 'flex', flexDirection: isTablet || isMobile ? 'column' : 'row', gap: '16px', width: '100%' }}
      >
        <BalanceCard name='Joana' date='Quinta-feira, 08/09/2022' balance={2500.0} />
      </div>
    </Base>
  )
}
