import axios from 'axios'

interface Transaction {
  mes: string
  tipo: string
  data: string
  valor: number
}

const formatMonth = () => {
  const data = new Date().toLocaleString('pt-BR', { month: 'long' })
  return data.charAt(0).toUpperCase() + data.slice(1)
}

export const sendTransaction = async (type: string, amount: number): Promise<Transaction> => {
  const transaction: Transaction = {
    mes: formatMonth(),
    tipo: type === 'deposit' ? 'Depósito' : 'Transferência',
    data: new Date().toLocaleDateString(),
    valor: type === 'transfer' ? -amount : amount
  }

  try {
    const response = await axios.post<Transaction>(`/api/extrato`, transaction)
    const saldoCC = await axios.get<Transaction[]>(`/api/saldo`, { params: { tipo: 'Conta corrente' } })
    const saldo = await axios.put<Transaction>(`/api/saldo/1`, {
      ...saldoCC.data[0],
      valor: response.data.valor + saldoCC.data[0].valor
    })
    return saldo.data
  } catch (error) {
    console.error('Error fetching saldo data:', error)
    return { tipo: '', valor: 0, mes: '', data: '' }
  }
}

export const useTransaction = () => {
  return { sendTransaction }
}
