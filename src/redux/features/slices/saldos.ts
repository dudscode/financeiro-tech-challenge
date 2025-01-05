import { createSlice } from '@reduxjs/toolkit'

export interface ISaldo {
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

export const { updateSaldo, updateSaldoTotal } = saldosSlice.actions

export default saldosSlice.reducer
