import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setExtrato, addTransaction } from '@/redux/features/slices/transactions'
import { Dispatch } from 'redux'
import { updateSaldoTotal } from '@/redux/features/slices/saldo'
import { toast } from 'react-toastify'
interface Transaction {
  mes: string
  tipo: string
  data: string
  valor: number
}

const formatMonth = () => {
  const data = new Date().toLocaleString('pt-BR', { month: 'long' })
  return data.charAt(0).toUpperCase() + data.slice(1)
}

export const sendTransaction = async (type: string, amount: number, dispatch: Dispatch) => {
  const transaction: Transaction = {
    mes: formatMonth(),
    tipo: type === 'deposit' ? 'Depósito' : 'Transferência',
    data: new Date().toLocaleDateString(),
    valor: type === 'transfer' ? -amount : amount
  }

  try {
    const response = await axios.post<Transaction>(`/api/extrato`, transaction)
    const saldoCC = await axios.get<Transaction[]>(`/api/saldo`, { params: { tipo: 'Conta corrente' } })
    const saldo = await axios.put<Transaction>(`/api/saldo/1`, {
      ...saldoCC.data[0],
      valor: response.data.valor + saldoCC.data[0].valor
    })

    dispatch(addTransaction(response.data))
    dispatch(updateSaldoTotal(saldo.data.valor))
    toast.success('Transação efetuada com sucesso!')
  } catch (error) {
    toast.error('Erro ao efetuar transação. Tente novamente.')
    return { tipo: '', valor: 0, mes: '', data: '' }
  }
}
export const getExtrato = async (dispatch: Dispatch) => {
  try {
    const extrato = await axios.get(`/api/extrato`)
    dispatch(setExtrato(extrato.data))
  } catch (error) {
    console.error('Error fetching saldo data:', error)
    return []
  }
}

export const useTransaction = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getExtrato(dispatch)
  }, [])

  return { sendTransaction: (type: string, amount: number) => sendTransaction(type, amount, dispatch) }
}
