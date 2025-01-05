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
  const { extrato } = useSelector((state: any) => state.transactions)
  const { saldo } = useSelector((state: any) => state.saldos)
  const dispatch = useDispatch()
  const [saldoAtualizado, updateSaldo] = useState(saldo)

  useEffect(() => {
    fetchGetSaldo()(dispatch)
  }, [])

  useEffect(() => {
    setLoading(true)
    !!extrato.length && types[type](saldo)(dispatch)
  }, [extrato])

  useEffect(() => {
    if (!!saldo.length) {
      updateSaldo(saldo)
      setLoading(false)
    }
  }, [saldo])

  return {
    loading,
    saldo: saldoAtualizado,
    saldoCC: saldoAtualizado.find((item: ISaldo) => item.tipo === 'Conta corrente'),
    saldoCP: saldoAtualizado.find((item: ISaldo) => item.tipo === 'Conta poupança'),
    getSaldoCC: () => fetchGetSaldoCC(saldo)(dispatch)
  }
}
