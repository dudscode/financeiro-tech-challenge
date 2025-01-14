import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSendTransaction } from '@/redux/features/actions/transactions'
import { fetchGetExtrato } from '@/redux/features/actions/extratos'
import { TransactionType } from '@/config/transactions'

export const useTransaction = () => {
  const dispatch = useDispatch()
  const { saldo } = useSelector((state: any) => state.saldos)
  const [page, setPage] = useState(1) // Estado para controlar a página atual

  const sendTransaction = (type: TransactionType, amount: number) => {
    fetchSendTransaction(type, amount, saldo)(dispatch)
  }

  // Função para obter o extrato de uma página específica
  const getExtrato = useCallback(
    (pageNumber: number) => {
      setPage(pageNumber) // Atualiza o estado da página atual
      fetchGetExtrato(pageNumber)(dispatch)
    },
    [dispatch]
  )

  // Carrega a primeira página de extrato quando o componente é montado
  useEffect(() => {
    getExtrato(1)
  }, [getExtrato])

  return { sendTransaction, getExtrato, page }
}
