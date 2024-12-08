import { createSlice, createSelector } from '@reduxjs/toolkit'

interface ITrasaction {
  mes: string
  tipo: string
  data: string
  valor: number
}

interface ISaldo {
  id: string
  tipo: string
  valor: number
}

interface IExtratoState {
  extrato: ITrasaction[]
  saldo: ISaldo[]
  saldoTotal: number
}

const initialState: IExtratoState = {
  extrato: [],
  saldo: [],
  saldoTotal: 0
}

const saldoSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    resetExtrato: (state, action: { payload: ITrasaction[] }) => {
      return {
        ...state,
        extrato: [...action.payload]
      }
    },
    addTransaction: (state, action: { payload: ITrasaction }) => {
      return {
        ...state,
        extrato: [...state.extrato, action.payload]
      }
    },
    saldoTotal: (state, action: { payload: number }) => {
      return {
        ...state,
        saldoTotal: action.payload
      }
    },
    addSaldo: (state, action: { payload: ISaldo }) => {
      return {
        ...state,
        saldo: [action.payload]
      }
    }
  }
})

const selectTotalSaldo = createSelector(
  state => state.transactions.transactions,
  transactions => transactions
)

export const {} = saldoSlice.actions

export default saldoSlice.reducer
