import { Dispatch } from 'redux'
import axios from 'axios'
import { addTransaction } from '@/redux/features/slices/transactions'
import { updateSaldo } from '@/redux/features/slices/saldos'
import { toast } from 'react-toastify'
import transactionsType, { TransactionType } from '@/config/transactions'
import { ISaldo } from '@/redux/features/slices/saldos'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001' || 'https://json-server-vercel-tawny-one.vercel.app'

interface Transaction {
  mes: string
  tipo: TransactionType
  data: string
  valor: number
}

const formatMonth = () => {
  const data = new Date().toLocaleString('pt-BR', { month: 'long' })
  return data.charAt(0).toUpperCase() + data.slice(1)
}

export const fetchSendTransaction = (type: TransactionType, amount: number, saldo: ISaldo[]) => {
  const transaction: Transaction = {
    mes: formatMonth(),
    tipo: type,
    data: new Date().toLocaleDateString(),
    valor: transactionsType.find(({ value }) => value === type)?.action === 'sum' ? amount : -amount
  }

  return async (dispatch: Dispatch) => {
    Promise.all([
      axios.post(`${API_URL}/extrato`, transaction),
      axios.get(`${API_URL}/saldo`, { params: { tipo: 'Conta corrente' } })
    ])
      .then(([transaction, saldos]) => {
        dispatch(addTransaction(transaction.data))
        axios
          .put<ISaldo>(`${API_URL}/saldo/1`, {
            ...saldos.data[0],
            valor: transaction.data.valor + saldos.data[0].valor
          })
          .then(saldoUpdate => {
            const novoSaldo: [ISaldo] = saldo.map((item: ISaldo) =>
              item.tipo === 'Conta poupança' ? item : saldoUpdate.data
            ) as [ISaldo]
            dispatch(updateSaldo(novoSaldo))
          })
          .catch(error => {
            console.error('Error updating saldo data:', error)
          })
      })
      .catch(() => {
        toast.error('Erro ao efetuar transação. Tente novamente.')
      })
      .finally(() => {
        toast.success('Transação efetuada com sucesso!')
      })
  }
}
