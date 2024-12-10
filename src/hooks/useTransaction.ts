import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSendTransaction } from '@/redux/features/actions/transactions'
import { fetchGetExtrato } from '@/redux/features/actions/extratos'

export const useTransaction = () => {
  const dispatch = useDispatch()

  const sendTransaction = (type: string, amount: number) => {
    fetchSendTransaction(type, amount)(dispatch)
  }

  useEffect(() => {
    fetchGetExtrato()(dispatch)
  }, [])

  return { sendTransaction }
}
