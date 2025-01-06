import axios from 'axios'
import { Dispatch } from 'redux'
import { updateSaldo } from '@/redux/features/slices/saldos'
import { ISaldo } from '@/redux/features/slices/saldos'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001' || 'https://json-server-vercel-tawny-one.vercel.app'

export const fetchGetSaldo = () => {
  return async (dispatch: Dispatch) => {
    axios
      .get(`${API_URL}/saldo`)
      .then(saldo => {
        dispatch(updateSaldo(saldo.data))
      })
      .catch(error => {
        console.error('Error fetching saldo data:', error)
      })
      .finally(() => {
        console.log('Extrato fetched!')
      })
  }
}

export const fetchGetSaldoCP = (saldo: [ISaldo]) => {
  return async (dispatch: Dispatch) => {
    axios
      .get(`${API_URL}/saldo`, { params: { tipo: 'Conta poupança' } })
      .then(result => {
        const saldoCP = result.data[0]
        const saldoAtualizado: [ISaldo] = saldo.map(item => (item.tipo !== 'Conta poupança' ? item : saldoCP)) as [
          ISaldo
        ]
        dispatch(updateSaldo(saldoAtualizado))
      })
      .catch(error => {
        console.error('Error fetching saldo data:', error)
      })
      .finally(() => {
        console.log('Extrato fetched!')
      })
  }
}
export const fetchGetSaldoCC = (saldo: [ISaldo]) => {
  return async (dispatch: Dispatch) => {
    axios
      .get(`${API_URL}/saldo`, { params: { tipo: 'Conta corrente' } })
      .then(result => {
        const saldoCC = result.data[0]
        const saldoAtualizado: [ISaldo] = saldo.map(item => (item.tipo !== 'Conta corrente' ? item : saldoCC)) as [
          ISaldo
        ]
        dispatch(updateSaldo(saldoAtualizado))
      })
      .catch(error => {
        console.error('Error fetching saldo data:', error)
      })
      .finally(() => {
        console.log('Extrato fetched!')
      })
  }
}
