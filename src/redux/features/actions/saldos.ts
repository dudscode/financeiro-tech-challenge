import axios from 'axios'
import { Dispatch } from 'redux'
import { updateSaldo, getSaldo } from '@/redux/features/slices/saldos'

interface ISaldo {
  id: string
  tipo: string
  valor: number
}

export const fetchGetSaldo = () => {
  return async (dispatch: Dispatch) => {
    axios
      .get(`/api/saldo`)
      .then(saldo => {
        dispatch(getSaldo(saldo.data))
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
      .get(`/api/saldo`, { params: { tipo: 'Conta poupança' } })
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
      .get(`/api/saldo`, { params: { tipo: 'Conta corrente' } })
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
