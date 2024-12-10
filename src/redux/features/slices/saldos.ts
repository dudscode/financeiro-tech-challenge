import { createSlice, createSelector } from '@reduxjs/toolkit'

interface ISaldo {
  id: string
  tipo: string
  valor: number
}

interface ISaldoState {
  saldo: ISaldo[]
  saldoTotal: number
}

const initialState: ISaldoState = {
  saldo: [],
  saldoTotal: 0
}

const saldosSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    getSaldo: (state, action: { payload: [ISaldo] }) => {
      return {
        ...state,
        saldo: action.payload
      }
    },
    updateSaldo: (state, action: { payload: [ISaldo] }) => {
      return {
        ...state,
        saldo: action.payload
      }
    },
    updateSaldoTotal: (state, action: { payload: number }) => {
      return {
        ...state,
        saldoTotal: action.payload
      }
    }
  }
})

export const totalSaldo = createSelector(
  (state: ISaldoState) => state.saldo,
  (saldo: ISaldo[]) => saldo.reduce((acc, item) => acc + item.valor, 0)
)

export const { updateSaldo, updateSaldoTotal, getSaldo } = saldosSlice.actions

export default saldosSlice.reducer
