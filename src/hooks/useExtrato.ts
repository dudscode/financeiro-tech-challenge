import { useEffect, useState } from 'react'
import { ITransacao, TypeProps, IModalProps } from '@/components/Extrato/types'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchEditData, fetchDeleteData } from '@/redux/features/actions/extratos'

export const useExtrato = () => {
  const dispatch = useDispatch()
  const { extrato } = useSelector((state: any) => state.transactions)
  const { saldo } = useSelector((state: any) => state.saldos)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState<ITransacao>({} as ITransacao)
  const [openModal, setOpenModal] = useState<IModalProps>({
    status: false,
    type: 'edit'
  })

  useEffect(() => {
    !!extrato.length && setLoading(false)
  }, [extrato])

  const fn = {
    deleted: fetchDeleteData,
    edit: fetchEditData
  }

  const onEdit = (item: ITransacao) => {
    setItem(item)
    setOpenModal({ status: true, type: 'edit' })
  }
  const onDelete = (item: ITransacao) => {
    setItem(item)
    setOpenModal({ status: true, type: 'deleted' })
  }

  const fetchData = async (type: TypeProps, value?: string) => {
    if (!!value) {
      await fn[type](item)(dispatch)
    }
    setOpenModal({ status: false, type: 'edit' })
  }

  return {
    extrato,
    loading,
    fetchData,
    openModal,
    onEdit,
    onDelete,
    item,
    setItem
  }
}
