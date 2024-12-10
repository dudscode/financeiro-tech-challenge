import axios from 'axios'
import { Dispatch } from 'redux'
import { setExtrato } from '@/redux/features/slices/transactions'

export const fetchGetExtrato = () => {
  return async (dispatch: Dispatch) => {
    axios
      .get(`/api/extrato`)
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
