import { addTransaction, addSaldo } from '@/redux/features/slices/transactions'
import axios from 'axios'

interface Transaction {
  mes: string
  tipo: string
  data: string
  valor: number
}

interface Dispatch {
  (action: any): void
}

export const setTransaction = (transaction: Transaction) => {
  ;async (dispatch: Dispatch) => {}

  return {
    type: 'SET_TRANSACTION'
  }
}
