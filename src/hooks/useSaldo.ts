import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateSaldo, getSaldo as getSaldoSlice } from '@/redux/features/slices/saldo'
import { Dispatch } from 'redux'

interface ISaldo {
  id: string
  tipo: string
  valor: number
}

type Type = 'cc' | 'cp'

export const getSaldo = async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`/api/saldo`)
    const saldo = response.data
    dispatch(getSaldoSlice(saldo))
  } catch (error) {
    console.error('Error fetching saldo data:', error)
  }
}
export const getSaldoCP = async (saldo: [ISaldo], dispatch: Dispatch) => {
  try {
    const response = await axios.get(`/api/saldo`, { params: { tipo: 'Conta poupança' } })
    const saldoCP = response.data[0]
    const saldoAtualizado: [ISaldo] = saldo.map(item => (item.tipo !== 'Conta poupança' ? item : saldoCP)) as [ISaldo]
    dispatch(updateSaldo(saldoAtualizado))
  } catch (error) {
    console.error('Error fetching saldo data:', error)
  }
}
export const getSaldoCC = async (saldo: [ISaldo], dispatch: Dispatch) => {
  try {
    const response = await axios.get(`/api/saldo`, { params: { tipo: 'Conta corrente' } })
    const saldoCC = response.data[0]
    const saldoAtualizado: [ISaldo] = saldo.map(item => (item.tipo !== 'Conta corrente' ? item : saldoCC)) as [ISaldo]
    console.log('saldoAtualizado: ', saldoAtualizado)
    dispatch(updateSaldo(saldoAtualizado))
  } catch (error) {
    console.error('Error fetching saldo data:', error)
  }
}

const types = {
  cc: getSaldoCC,
  cp: getSaldoCP
}

export const useSaldo = (type: Type = 'cc') => {
  const { transactions, saldo } = useSelector((state: any) => state)
  const { extrato } = transactions
  const dispatch = useDispatch()
  const [saldoAtualizado, setSaldo] = useState(saldo.saldo)

  useEffect(() => {
    getSaldo(dispatch)
  }, [])

  useEffect(() => {
    !!extrato.length && types[type](saldo.saldo, dispatch)
  }, [extrato])

  useEffect(() => {
    !!saldo.saldo.length && setSaldo(saldo.saldo)
  }, [saldo.saldo])

  return {
    saldo: saldoAtualizado,
    saldoCC: saldoAtualizado.find((item: ISaldo) => item.tipo === 'Conta corrente'),
    saldoCP: saldoAtualizado.find((item: ISaldo) => item.tipo === 'Conta poupança'),
    getSaldoCC: () => getSaldoCC(saldo.saldo, dispatch)
  }
}
