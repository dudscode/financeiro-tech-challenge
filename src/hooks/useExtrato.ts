import { useEffect, useState } from 'react'
import { ITransacao, TypeProps, IModalProps } from '@/components/Extrato/types'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchEditData, fetchDeleteData } from '@/redux/features/actions/extratos'

interface ExtratoItem {
  mes: string
  tipo: string
  data: string
  valor: number
}

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
  const [filteredExtrato, setFilteredExtrato] = useState<ExtratoItem[]>([])
  const [tempFiltered, setTempFiltered] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [paginatedExtrato, setPaginatedExtrato] = useState<ExtratoItem[]>([])

  const itemsPerPage = 5

  useEffect(() => {
    !!extrato.length && setLoading(false)
    setFilteredExtrato(extrato)
  }, [extrato])

  useEffect(() => {
    !!extrato.length && setLoading(false)
    setCurrentPage(1)
    setFilteredExtrato(
      [...extrato].filter((item: ExtratoItem) => {
        const reg = new RegExp(tempFiltered.toLowerCase(), 'gi')
        return !!tempFiltered ? item.mes.toLowerCase().match(reg)?.[0] : true
      })
    )
  }, [tempFiltered])

  useEffect(() => {
    setLoading(false)
  }, [saldo])

  useEffect(() => {
    !!extrato.length && setLoading(false)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    setPaginatedExtrato(filteredExtrato.slice(startIndex, endIndex))
  }, [filteredExtrato, currentPage])

  const fn = {
    deleted: fetchDeleteData,
    edit: fetchEditData
  }

  const onEdit = (item: ITransacao) => {
    setItem(item)
    setLoading(true)
    setOpenModal({ status: true, type: 'edit' })
  }
  const onDelete = (item: ITransacao) => {
    setItem(item)
    setLoading(true)
    setOpenModal({ status: true, type: 'deleted' })
  }

  const fetchData = async (type: TypeProps, value?: string) => {
    if (!!value) {
      await fn[type](item)(dispatch)
    }
    setLoading(true)
    setOpenModal({ status: false, type: 'edit' })
  }

  const hasExtrato = !!extrato && extrato.length
  const hasPagination = !(currentPage * itemsPerPage >= filteredExtrato.length) || currentPage > 1
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= Math.ceil(filteredExtrato.length / itemsPerPage)) {
      setCurrentPage(newPage)
    }
  }

  return {
    extrato: [...paginatedExtrato].reverse() || [],
    loading,
    fetchData,
    openModal,
    onEdit,
    onDelete,
    item,
    setItem,
    tempFiltered,
    setTempFiltered,
    currentPage,
    setCurrentPage,
    hasExtrato,
    hasPagination,
    handlePageChange,
    hasNextPage: currentPage * itemsPerPage > filteredExtrato.length,
    hasPreviousPage: currentPage === 1
  }
}
