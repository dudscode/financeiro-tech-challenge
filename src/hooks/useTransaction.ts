import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSendTransaction } from '@/redux/features/actions/transactions'
import { fetchGetExtrato } from '@/redux/features/actions/extratos'
import { TransactionType } from '@/config/transactions'

export const useTransaction = () => {
  const dispatch = useDispatch()
  const { saldo } = useSelector((state: any) => state.saldos)
  const [page, setPage] = useState(1)

  const sendTransaction = (type: TransactionType, amount: number, file: string, filename: string) => {
    fetchSendTransaction(type, amount, file, filename, saldo)(dispatch)
  }

  const getExtrato = useCallback(
    (pageNumber: number) => {
      setPage(pageNumber)
      fetchGetExtrato(pageNumber)(dispatch)
    },
    [dispatch]
  )

  useEffect(() => {
    getExtrato(1)
  }, [getExtrato])

  return { sendTransaction, getExtrato, page }
}
