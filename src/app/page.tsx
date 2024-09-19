'use client'
import Base from '@/templates/Base'
import { Extrato, ITransacao } from '../components/Extrato'
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
    </Base>
  )
}
