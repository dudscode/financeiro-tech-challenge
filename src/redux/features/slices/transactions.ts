import { createSlice } from '@reduxjs/toolkit'
import { ITransacao } from '@/components/Extrato/types'

interface IExtratoState {
  extrato: ITransacao[]
}

const initialState: IExtratoState = {
  extrato: []
}

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: { payload: ITransacao }) => {
      return {
        ...state,
        extrato: [...state.extrato, action.payload]
      }
    },
    setExtrato: (state, action: { payload: ITransacao[] }) => {
      return {
        ...state,
        extrato: action.payload
      }
    }
  }
})

export const { addTransaction, setExtrato } = transactionsSlice.actions

export default transactionsSlice.reducer
