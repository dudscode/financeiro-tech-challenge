import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSendTransaction } from '@/redux/features/actions/transactions'
import { fetchGetExtrato } from '@/redux/features/actions/extratos'
import { useSelector } from 'react-redux'

export const useTransaction = () => {
  const dispatch = useDispatch()
  const { saldo } = useSelector((state: any) => state.saldos)

  const sendTransaction = (type: string, amount: number) => {
    fetchSendTransaction(type, amount, saldo)(dispatch)
  }

  useEffect(() => {
    fetchGetExtrato()(dispatch)
  }, [])

  return { sendTransaction }
}
