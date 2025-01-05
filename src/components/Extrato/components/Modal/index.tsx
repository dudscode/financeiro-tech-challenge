import { SelectTypeTransaction } from '@/components/SelectTypeTransaction'
import { DialogModal } from '@/components/Dialog'
import { ITransacao, TypeProps } from '@/components/Extrato/types'
import { formatCurrencyWithoutNegative } from '@/components/Extrato/utils'
import * as S from '@/components/Extrato/styles'

const getTransactionType = {
  deposit: 'Depósito',
  transfer: 'Transferência'
} as const

const getTransactionTypeValue = {
  Depósito: 'deposit',
  Transferência: 'transfer'
} as const

export const Modal = ({
  item,
  type,
  setItem,
  openModal,
  fetchData
}: {
  item: ITransacao
  type: 'deleted' | 'edit'
  setItem: React.Dispatch<React.SetStateAction<ITransacao>>
  openModal: boolean
  fetchData: (mode: TypeProps, value?: string) => void
}) => {
  const data = {
    deleted: {
      value: 'Ok',
      mode: 'delete',
      fetchData: 'deleted',
      title: '',
      children: `Deseja realmente apagar o registro ${item.id}?`
    },
    edit: {
      value: 'Ok',
      mode: 'edit',
      fetchData: 'edit',
      title: `Deseja editar tipo de operação do item ${item.id} feito no dia ${item.data} com valor de ${formatCurrencyWithoutNegative(item.valor)}?`,
      children: (
        <S.List>
          <S.Item>
            <SelectTypeTransaction
              callback={(value: string) =>
                setItem({
                  ...item,
                  valor: value === 'deposit' ? Math.abs(item.valor) : parseInt(`-${Math.abs(item.valor)}`),
                  tipo: getTransactionType[value as keyof typeof getTransactionType] || 'deposit'
                })
              }
              size='100%'
              initialValue={item.tipo ? getTransactionTypeValue[item.tipo] : 'deposit'}
            />
          </S.Item>
        </S.List>
      )
    }
  } as const

  return (
    <DialogModal
      open={openModal}
      id=''
      onClose={value => {
        fetchData(data[type].fetchData, value)
      }}
      value={data[type].value}
      mode={data[type].mode}
      title={data[type].title}
    >
      {data[type].children}
    </DialogModal>
  )
}
