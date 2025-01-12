import { TransactionType } from '@/config/transactions'
export interface IExtratoProps {
  title: string
}

export type TypeProps = 'deleted' | 'edit'

export interface ITransacao {
  mes: string
  data: string
  tipo: TransactionType
  valor: number
  id: string
}

export interface IModalProps {
  status: boolean
  type: TypeProps
}
