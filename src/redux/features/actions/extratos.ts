import axios from 'axios'
import { Dispatch } from 'redux'
import { setExtrato } from '@/redux/features/slices/transactions'
import { updateSaldo } from '@/redux/features/slices/saldos'
import { ITransacao } from '@/components/Extrato/types'
import { toast } from 'react-toastify'
import { ISaldo } from '@/redux/features/slices/saldos'
import transactionsType from '@/config/transactions'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://json-server-vercel-tawny-one.vercel.app'

const mountValue = (response: [ITransacao]) => response.reduce((current, acc) => acc.valor + current, 0)

export const fetchGetExtrato = (page = 1) => {
  return async (dispatch: Dispatch) => {
    axios
      .get(`${API_URL}/extrato`, { params: { _page: page } })
      .then(response => {
        dispatch(setExtrato(response.data))
      })
      .catch(error => {
        console.error('Error fetching extrato data:', error)
        toast.error('Erro ao buscar dados do extrato.')
      })
      .finally(() => {
        console.log('Extrato fetched!')
      })
  }
}

export const fetchEditData = (item: ITransacao) => {
  return async (dispatch: Dispatch) => {
    const tipo = encodeURIComponent('Conta corrente')
    await axios.put(`${API_URL}/extrato/${item.id}`, {
      ...item,
      valor:
        transactionsType.find(({ value }) => value === item.tipo)?.action === 'sum'
          ? Math.abs(item.valor)
          : -Math.abs(item.valor)
    })
    Promise.all([axios.get(`${API_URL}/extrato`), axios.get(`/api/balance?tipo=${tipo}`)])
      .then(async ([response, saldos]) => {
        await axios.put(`/api/balance/1`, {
          ...saldos.data.result[0],
          valor: mountValue(response.data)
        })
        const saldosAtualizado = saldos.data.result.map((value: ISaldo) =>
          value.tipo === 'Conta corrente' ? saldos.data.result[0] : value
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

export const fetchDeleteData = (item: ITransacao) => {
  return async (dispatch: Dispatch) => {
    const tipo = encodeURIComponent('Conta corrente')
    await axios.delete(`${API_URL}/extrato/${item.id}`)
    Promise.all([axios.get(`${API_URL}/extrato`), axios.get(`/api/saldos?tipo=${tipo}`)])
      .then(async ([response, saldos]) => {
        await axios.put(`/api/saldos/1`, {
          ...saldos.data.result[0],
          valor: mountValue(response.data)
        })
        const saldosAtualizado = saldos.data.result.map((value: ISaldo) =>
          value.tipo === 'Conta corrente' ? saldos.data.result[0] : value
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
