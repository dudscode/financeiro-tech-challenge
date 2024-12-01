export interface IExtratoProps {
  title: string
}

export type TypeProps = 'deleted' | 'edit'

export interface ITransacao {
  mes: string
  data: string
  tipo: 'Depósito' | 'Transferência' | undefined
  valor: number
  id: string
}

export interface IModalProps {
  status: boolean
  type: TypeProps
}
