import { Button } from '@/components/Button'
import I from '@/components/Icons'
import { ITransacao } from '@/components/Extrato/types'

export const ButtonEdit = ({
  item,
  hasExtrato,
  onEdit
}: {
  item: ITransacao
  hasExtrato: boolean
  onEdit: (item: ITransacao) => void
}) => {
  return (
    <Button radius width='22px' onClick={() => onEdit(item)} disabled={!hasExtrato}>
      <I.Edit fontSize='small' sx={{ fontSize: '14px' }} />
    </Button>
  )
}

export const ButtonDelete = ({
  item,
  hasExtrato,
  onDelete
}: {
  item: ITransacao
  hasExtrato: boolean
  onDelete: (item: ITransacao) => void
}) => {
  return (
    <Button
      radius
      width='22px'
      onClick={() => {
        onDelete(item)
      }}
      disabled={!hasExtrato}
    >
      <I.Delete fontSize='small' sx={{ fontSize: '14px' }} />
    </Button>
  )
}
