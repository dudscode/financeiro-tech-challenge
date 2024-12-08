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

const saldoSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    updateSaldoCC: (state, action: { payload: ISaldo }) => {
      const index = state.saldo.findIndex(item => item.tipo === 'Conta corrente')
      if (index !== -1) {
        return {
          ...state,
          saldo: [
            state.saldo[index],
            {
              ...state.saldo[index],
              valor: action.payload.valor
            }
          ]
        }
      }
    },
    updateSaldoCP: (state, action: { payload: ISaldo }) => {
      const index = state.saldo.findIndex(item => item.tipo === 'Conta poupança')
      if (index !== -1) {
        return {
          ...state,
          saldo: [
            state.saldo[index],
            {
              ...state.saldo[index],
              valor: action.payload.valor
            }
          ]
        }
      }
    }
  }
})

export const totalSaldo = createSelector(
  (state: ISaldoState) => state.saldo,
  (saldo: ISaldo[]) => saldo.reduce((acc, item) => acc + item.valor, 0)
)

export const { updateSaldoCC, updateSaldoCP } = saldoSlice.actions

export default saldoSlice.reducer
