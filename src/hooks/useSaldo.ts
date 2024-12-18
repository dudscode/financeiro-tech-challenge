import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGetSaldo, fetchGetSaldoCC, fetchGetSaldoCP } from '@/redux/features/actions/saldos'

interface ISaldo {
  id: string
  tipo: string
  valor: number
}

type Type = 'cc' | 'cp'

const types = {
  cc: fetchGetSaldoCC,
  cp: fetchGetSaldoCP
}

export const useSaldo = (type: Type = 'cc') => {
  const [loading, setLoading] = useState(true)
  const { transactions, saldos } = useSelector((state: any) => state)
  const { extrato } = transactions
  const dispatch = useDispatch()
  const [saldoAtualizado, updateSaldo] = useState(saldos.saldo)

  useEffect(() => {
    fetchGetSaldo()(dispatch)
  }, [])

  useEffect(() => {
    setLoading(true)
    !!extrato.length && types[type](saldos.saldo)(dispatch)
  }, [extrato])

  useEffect(() => {
    if (!!saldos.saldo.length) {
      updateSaldo(saldos.saldo)
      setLoading(false)
    }
  }, [saldos.saldo])

  return {
    loading,
    saldo: saldoAtualizado,
    saldoCC: saldoAtualizado.find((item: ISaldo) => item.tipo === 'Conta corrente'),
    saldoCP: saldoAtualizado.find((item: ISaldo) => item.tipo === 'Conta poupança'),
    getSaldoCC: () => fetchGetSaldoCC(saldos.saldo)(dispatch)
  }
}
