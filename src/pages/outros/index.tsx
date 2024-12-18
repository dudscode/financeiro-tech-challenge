'use client'
import Base from '@/templates/Base'
import OtherServices from '@/components/OtherServices'
import { BalanceCard } from '@/components/BalanceCard'
import { useEffect, useState } from 'react'
import { useSaldo } from '@/hooks/useSaldo'

export default function Home() {
  const { saldo } = useSaldo('cc')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    saldo && setLoading(false)
  }, [saldo])

  return (
    <Base>
      <BalanceCard saldo={saldo || { tipo: '', valor: 0 }} loading={loading} />
      <OtherServices />
    </Base>
  )
}
