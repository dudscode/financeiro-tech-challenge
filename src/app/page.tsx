'use client'
import Base from '@/templates/Base'
import { Extrato, ITransacao } from '../components/Extrato'
import BalanceCard from '@/components/BalanceCard'
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
export default async function Home() {
  return (
    <Base>
      <Extrato title='Extrato' transacao={transacoes} />
      <BalanceCard name='Joana' date='Quinta-feira, 08/09/2022' balance={2500.0} />
    </Base>
  )
}
