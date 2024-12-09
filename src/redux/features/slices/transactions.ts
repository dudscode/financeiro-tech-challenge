import { createSlice, createSelector } from '@reduxjs/toolkit'

interface ITrasaction {
  mes: string
  tipo: string
  data: string
  valor: number
}

interface IExtratoState {
  extrato: ITrasaction[]
}

const initialState: IExtratoState = {
  extrato: []
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
    },
    setExtrato: (state, action: { payload: ITrasaction[] }) => {
      return {
        ...state,
        extrato: action.payload
      }
    }
  }
})

interface RootState {
  transactions: IExtratoState
}

export const totalTransactions = createSelector(
  (state: RootState) => state.transactions.extrato,
  (transactions: ITrasaction[]) => transactions.reduce((acc: number, item: ITrasaction) => acc + item.valor, 0)
)

export const { addTransaction, setExtrato } = transactionsSlice.actions

export default transactionsSlice.reducer
