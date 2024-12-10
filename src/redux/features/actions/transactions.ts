import { Dispatch } from 'redux'
import axios from 'axios'
import { addTransaction } from '@/redux/features/slices/transactions'
import { updateSaldoTotal } from '@/redux/features/slices/saldos'
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

export const fetchSendTransaction = (type: string, amount: number) => {
  const transaction: Transaction = {
    mes: formatMonth(),
    tipo: type === 'deposit' ? 'Depósito' : 'Transferência',
    data: new Date().toLocaleDateString(),
    valor: type === 'transfer' ? -amount : amount
  }

  return async (dispatch: Dispatch) => {
    Promise.all([
      axios.post<Transaction>(`/api/extrato`, transaction),
      axios.get<Transaction[]>(`/api/saldo`, { params: { tipo: 'Conta corrente' } })
    ])
      .then(([transaction, saldo]) => {
        dispatch(addTransaction(transaction.data))
        axios
          .put<Transaction>(`/api/saldo/1`, {
            ...saldo.data[0],
            valor: transaction.data.valor + saldo.data[0].valor
          })
          .then(saldoUpdate => {
            console.log('saldoUpdate: ', saldoUpdate)
            dispatch(updateSaldoTotal(saldoUpdate.data.valor))
          })
          .catch(error => {
            console.error('Error updating saldo data:', error)
          })
      })
      .catch(error => {
        toast.error('Erro ao efetuar transação. Tente novamente.')
      })
      .finally(() => {
        toast.success('Transação efetuada com sucesso!')
      })
  }
}
