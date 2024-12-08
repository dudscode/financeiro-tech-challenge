import axios from 'axios'

interface Saldo {
  id: number
  valor: number
  tipo: string
}

interface Dispatch {
  (action: any): void
}

export const setSaldo = (updatedSaldo: Saldo) => {
  ;async (dispatch: Dispatch) => {}
  return {
    type: 'GET_SALDO_CP'
  }
}
