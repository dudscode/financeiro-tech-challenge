import axios from 'axios'
import { useEffect, useState } from 'react'
import { ITransacao, TypeProps, IModalProps } from '@/components/Extrato/types'

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
    return response.data
  } catch (error) {
    console.error('Error fetching extrato data:', error)
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
    await axios.put(`/api/saldo/1`, {
      ...saldoCC.data[0],
      valor: dataDelete.data.valor + saldoCC.data[0].valor
    })
    return response.data
  } catch (error) {
    console.error('Error fetching extrato data:', error)
  }
}

const fetchExtratoData = async () => {
  try {
    const response = await axios.get('/api/extrato')
    return response.data
  } catch (error) {
    console.error('Error fetching extrato data:', error)
  }
}

export const useExtrato = () => {
  const [extrato, setExtrato] = useState<ITransacao[]>([])
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState<ITransacao>({} as ITransacao)
  const [openModal, setOpenModal] = useState<IModalProps>({
    status: false,
    type: 'edit'
  })

  const fn = {
    deleted: fetchDeleteData,
    edit: fetchEditData
  }

  useEffect(() => {
    fetchExtratoData().then(response => {
      setExtrato(response)
      setLoading(false)
    })
  }, [])

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
      setExtrato(result)
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
