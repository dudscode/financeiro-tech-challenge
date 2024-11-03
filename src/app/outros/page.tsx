'use client'
import Base from '@/templates/Base'
import OtherServices from '@/components/OtherServices'
import { BalanceCard } from '@/components/BalanceCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Saldo {
  tipo: string
  valor: number
}

export default function Home() {
  const [saldo, setSaldo] = useState<Saldo>({ tipo: '', valor: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSaldoData = async () => {
      setLoading(true)
      try {
        const response = await axios.get('/api/saldo')
        const saldoData = response.data
        const totalSaldo = saldoData.reduce((acc: number, item: { valor: number }) => acc + item.valor, 0)
        setSaldo({ tipo: 'Conta Corrente', valor: totalSaldo })
      } catch (error) {
        console.error('Error fetching saldo data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSaldoData()
  }, [])

  const refreshSaldo = async (updatedSaldo: Saldo) => {
    try {
      await axios.put('/api/saldo', updatedSaldo)
      setSaldo(updatedSaldo)
    } catch (error) {
      console.error('Error updating saldo data:', error)
    }
  }

  return (
    <Base>
      <BalanceCard saldo={saldo} loading={loading} refreshSaldo={refreshSaldo} />
      <OtherServices />
    </Base>
  )
}
