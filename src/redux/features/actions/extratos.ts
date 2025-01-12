import axios from 'axios'
import { Dispatch } from 'redux'
import { setExtrato } from '@/redux/features/slices/transactions'
import { updateSaldo } from '@/redux/features/slices/saldos'
import { ITransacao } from '@/components/Extrato/types'
import { toast } from 'react-toastify'
import { ISaldo } from '@/redux/features/slices/saldos'
import transactionsType from '@/config/transactions'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001' || 'https://json-server-vercel-tawny-one.vercel.app'

const mountValue = (response: [ITransacao]) => response.reduce((current, acc) => acc.valor + current, 0)

export const fetchGetExtrato = () => {
  return async (dispatch: Dispatch) => {
    axios
      .get(`${API_URL}/extrato`)
      .then(extrato => {
        dispatch(setExtrato(extrato.data))
      })
      .catch(error => {
        console.error('Error fetching saldo data:', error)
      })
      .finally(() => {
        console.log('Extrato fetched!')
      })
  }
}

export const fetchEditData = (item: ITransacao, saldos: [ISaldo]) => {
  return async (dispatch: Dispatch) => {
    await axios.put(`${API_URL}/extrato/${item.id}`, {
      ...item,
      valor:
        transactionsType.find(({ value }) => value === item.tipo)?.action === 'sum'
          ? Math.abs(item.valor)
          : -Math.abs(item.valor)
    })
    Promise.all([
      axios.get(`${API_URL}/extrato`),
      axios.get(`${API_URL}/saldo`, { params: { tipo: 'Conta corrente' } })
    ])
      .then(async ([response, saldo]) => {
        await axios.put(`${API_URL}/saldo/1`, {
          ...saldo.data[0],
          valor: mountValue(response.data)
        })
        const saldosAtualizado = saldos.map((value: ISaldo) =>
          value.tipo === 'Conta corrente' ? saldo.data[0] : value
        )
        dispatch(updateSaldo(saldosAtualizado as [ISaldo]))
        dispatch(setExtrato(response.data))
        toast.success('Transação editada com sucesso!')
      })
      .catch(() => {
        toast.error('Erro ao editar transação. Tente novamente.')
      })
  }
}

export const fetchDeleteData = (item: ITransacao, saldos: [ISaldo]) => {
  return async (dispatch: Dispatch) => {
    await axios.delete(`${API_URL}/extrato/${item.id}`)
    Promise.all([
      axios.get(`${API_URL}/extrato`),
      axios.get(`${API_URL}/saldo`, { params: { tipo: 'Conta corrente' } })
    ])
      .then(async ([response, saldo]) => {
        await axios.put(`${API_URL}/saldo/1`, {
          ...saldo.data[0],
          valor: mountValue(response.data)
        })
        const saldosAtualizado = saldos.map((value: ISaldo) =>
          value.tipo === 'Conta corrente' ? saldo.data[0] : value
        )
        dispatch(updateSaldo(saldosAtualizado as [ISaldo]))
        dispatch(setExtrato(response.data))
        toast.success('Transação apagada com sucesso!')
      })
      .catch(() => {
        toast.error('Erro ao apagar transação. Tente novamente.')
      })
  }
}
