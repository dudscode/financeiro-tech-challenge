import axios from 'axios'
import { useEffect, useState } from 'react'

interface Saldo {
  tipo: string
  valor: number
}
type Type = 'cc' | 'cp' | 'total'

const refreshSaldo = async (updatedSaldo: Saldo) => {
  try {
    return await axios.put('/api/saldo', updatedSaldo)
  } catch (error) {
    console.error('Error updating saldo data:', error)
  }
}

export const getSaldoCP = async () => {
  try {
    const response = await axios.get(`/api/saldo`, { params: { tipo: 'Conta poupança' } })
    const saldoCC = response.data[0]
    return saldoCC
  } catch (error) {
    console.error('Error fetching saldo data:', error)
    return { tipo: 'Conta Corrente', valor: 0 }
  }
}
export const getSaldoCC = async () => {
  try {
    const response = await axios.get(`/api/saldo`, { params: { tipo: 'Conta corrente' } })
    const saldoCC = response.data[0]
    return saldoCC
  } catch (error) {
    console.error('Error fetching saldo data:', error)
    return { tipo: 'Conta Corrente', valor: 0 }
  }
}

export const getSaldoTotal = async () => {
  try {
    const response = await axios.get(`/api/saldo`)
    const saldoCC = response.data
    return saldoCC.reduce((acc: number, item: { valor: number }) => acc + item.valor, 0)
  } catch (error) {
    console.error('Error fetching saldo data:', error)
    return 0
  }
}

const types = {
  cc: getSaldoCC,
  cp: getSaldoCP,
  total: getSaldoTotal
}

export const useSaldo = (type: Type = 'cc') => {
  const [saldo, setSaldo] = useState<Saldo | null>(null)

  useEffect(() => {
    const fetchSaldo = async () => {
      const saldoResult = await types[type]()
      setSaldo(saldoResult)
    }

    try {
      fetchSaldo()
    } catch (error) {
      console.error('Error fetching saldo data:', error)
    }
  }, [])

  const getSaldo = async (fnSaldo: () => Promise<Saldo>) => {
    const saldoResult: Saldo = await fnSaldo()
    setSaldo(saldoResult)
  }

  return {
    saldo,
    refreshSaldo,
    getSaldoTotal: () => getSaldo(getSaldoTotal),
    getSaldoCC: () => getSaldo(getSaldoCC),
    getSaldoCP: () => getSaldo(getSaldoCP)
  }
}
