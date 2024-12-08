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

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: { payload: ITrasaction }) => {
      return {
        ...state,
        extrato: [...state.extrato, action.payload]
      }
    }
  }
})

const totalTransactions = createSelector(
  state => state.transactions.transactions,
  transactions => transactions.reduce((acc: number, item: ITrasaction) => acc + item.valor, 0)
)

export const { addTransaction } = transactionsSlice.actions

export default transactionsSlice.reducer
