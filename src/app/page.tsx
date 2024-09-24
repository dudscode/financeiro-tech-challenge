'use client'

import Base from '@/templates/Base'
import { BalanceCard } from '@/components/BalanceCard'
import { TransactionCard } from '@/components/TransactionCard'
import useIsTablet from '@/hooks/useIsTablet'
import useIsMobile from '@/hooks/useIsMobile'
import { Extrato, ITransacao } from '@/components/Extrato'

const transacoes: ITransacao[] = [
  {
    mes: 'Novembro',
    tipo: 'Depósito',
    data: '21/11/2022',
    valor: 'R$ 100'
  },
  {
    mes: 'Dezembro',
    tipo: 'Saque',
    data: '15/12/2022',
    valor: 'R$ 50'
  },
  {
    mes: 'Novembro',
    tipo: 'Transferência',
    data: '21/11/2022',
    valor: '-R$ 500'
  }
]

export default function Home() {
  const isTablet = useIsTablet()
  const isMobile = useIsMobile()
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
      <Extrato title='Extrato' transacao={transacoes} />
    </Base>
  )
}
