import { Dispatch } from 'redux'
import axios from 'axios'
import { addTransaction } from '@/redux/features/slices/transactions'
import { ISaldo, updateSaldo } from '@/redux/features/slices/saldos'
import { toast } from 'react-toastify'
import transactionsType, { TransactionType } from '@/config/transactions'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001' || 'https://json-server-vercel-tawny-one.vercel.app'

interface Transaction {
  mes: string
  tipo: TransactionType
  data: string
  valor: number
  timestamp: string
  file: string
  filename: string
}

const formatMonth = () => {
  const data = new Date().toLocaleString('pt-BR', { month: 'long' })
  return data.charAt(0).toUpperCase() + data.slice(1)
}

export const fetchSendTransaction = (
  type: TransactionType,
  amount: number,
  file: string,
  filename: string,
  saldo: ISaldo[]
) => {
  const transaction: Transaction = {
    mes: formatMonth(),
    tipo: type,
    data: new Date().toLocaleDateString(),
    valor: transactionsType.find(({ value }) => value === type)?.action === 'sum' ? amount : -amount,
    timestamp: new Date().toISOString(),
    file,
    filename
  }

  return async (dispatch: Dispatch) => {
    const tipo = 'Conta corrente'
    await axios
      .get(`/api/balance?tipo=${tipo}`)
      .then(saldos => {
        const saldoCC = saldos.data.result[0]
        const result = transaction.valor + saldoCC.valor
        const hasSum = transactionsType.find(({ value }) => value === type)?.action === 'sum'
        if (result < 0 && !hasSum) {
          toast.error('Saldo insuficiente')
          throw new Error('Saldo insuficiente')
        }
        axios
          .post(`${API_URL}/extrato`, transaction)
          .then(transaction => {
            dispatch(addTransaction(transaction.data))
            axios
              .put(`/api/balance/1`, {
                ...saldos.data.result[0],
                valor: transaction.data.valor + saldos.data.result[0].valor
              })
              .then(saldoUpdate => {
                const novoSaldo: [ISaldo] = saldo.map((item: ISaldo) =>
                  item.tipo === 'Conta poupança' ? item : saldoUpdate.data.result
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
      })
      .catch(error => {
        console.error('Saldo insuficiente')
      })
  }
}
