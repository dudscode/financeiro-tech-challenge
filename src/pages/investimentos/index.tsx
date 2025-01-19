import Base from '@/templates/Base'
import { InvestmentsCard } from '@/components/InvestmentsCard'
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
      <InvestmentsCard
        title='Investimentos'
        total='50.000.00'
        rendaVariavel='14.000,00'
        rendaFixa='36.000,00'
        chartData={chartData}
      />
    </Base>
  )
}

const chartData = [
  { id: 3, value: 200, label: 'Fundos de investimento', color: 'rgba(37, 103, 249, 1)' },
  { id: 2, value: 4000, label: 'Tesouro Direto', color: 'rgba(143, 60, 255, 1)' },
  { id: 1, value: 590, label: 'Previdência Privada', color: 'rgba(255, 60, 130, 1)' },
  { id: 0, value: 93, label: 'Bolsa de Valores', color: 'rgba(241, 130, 61, 1)' }
]
