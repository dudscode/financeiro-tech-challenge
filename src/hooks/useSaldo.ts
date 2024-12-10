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
  const { transactions, saldos } = useSelector((state: any) => state)
  const { extrato } = transactions
  const dispatch = useDispatch()
  const [saldoAtualizado, setSaldo] = useState(saldos.saldo)

  useEffect(() => {
    fetchGetSaldo()(dispatch)
  }, [])

  useEffect(() => {
    !!extrato.length && types[type](saldos.saldo)(dispatch)
  }, [extrato])

  useEffect(() => {
    !!saldos.saldo.length && setSaldo(saldos.saldo)
  }, [saldos.saldo])

  return {
    saldo: saldoAtualizado,
    saldoCC: saldoAtualizado.find((item: ISaldo) => item.tipo === 'Conta corrente'),
    saldoCP: saldoAtualizado.find((item: ISaldo) => item.tipo === 'Conta poupança'),
    getSaldoCC: () => fetchGetSaldoCC(saldos.saldo)(dispatch)
  }
}
