import axios from 'axios'
import { useEffect, useState } from 'react'
import { ITransacao, TypeProps, IModalProps } from '@/components/Extrato/types'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setExtrato } from '@/redux/features/slices/transactions'
import { toast } from 'react-toastify'

const fetchEditData = async (item: ITransacao) => {
  try {
    const dataEdit = await axios.patch('/api/extrato', {
      item
    })
    const response = await axios.get('/api/extrato')
    const saldoCC = await axios.get(`/api/saldo`, { params: { tipo: 'Conta corrente' } })
    await axios.put(`/api/saldo/1`, {
      ...saldoCC.data[0],
      valor: dataEdit.data.valor + saldoCC.data[0].valor
    })
    toast.success('Transação editava com sucesso!')
    return response.data
  } catch (error) {
    toast.error('Erro ao editar transação. Tente novamente.')
  }
}

const fetchDeleteData = async (item: ITransacao) => {
  try {
    const dataDelete = await axios.delete('/api/extrato', {
      data: {
        id: item.id
      }
    })
    const response = await axios.get('/api/extrato')
    const saldoCC = await axios.get(`/api/saldo`, { params: { tipo: 'Conta corrente' } })
    console.log('dataDelete.data.valor: ', dataDelete.data.valor)
    await axios.put(`/api/saldo/1`, {
      ...saldoCC.data[0],
      valor: saldoCC.data[0].valor - dataDelete.data.valor
    })
    toast.success('Transação apagada com sucesso!')
    return response.data
  } catch (error) {
    toast.error('Erro ao apagar transação. Tente novamente.')
  }
}

export const useExtrato = () => {
  const dispatch = useDispatch()
  const { extrato } = useSelector((state: any) => state.transactions)
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
      const result = await fn[type](item)
      dispatch(setExtrato(result))
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
