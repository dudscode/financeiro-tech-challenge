import axios from 'axios'
import { useEffect, useState } from 'react'

const API_URL = 'https://json-server-vercel-tawny-one.vercel.app'

export const useSaldo = () => {
  const [saldo, setSaldo] = useState({ contaCorrente: { valor: 0 }, contaPoupanca: { valor: 0 } })

  useEffect(() => {
    const fetchSaldo = async () => {
      const saldoResult = await getSaldo()
      setSaldo(saldoResult)
      console.log(saldoResult)
    }

    fetchSaldo()
  }, [])

  return saldo
}

const getSaldo = async () => {
  try {
    const response = await axios.get(`${API_URL}/saldo`)
    return { contaCorrente: response.data[0], contaPoupanca: response.data[1] }
  } catch (error) {
    console.error('Error fetching saldo data:', error)
    return { contaCorrente: { valor: 0 }, contaPoupanca: { valor: 0 } }
  }
}
