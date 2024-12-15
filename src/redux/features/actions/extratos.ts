import axios from 'axios'
import { Dispatch } from 'redux'
import { setExtrato } from '@/redux/features/slices/transactions'

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001' || 'https://json-server-vercel-tawny-one.vercel.app'

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
