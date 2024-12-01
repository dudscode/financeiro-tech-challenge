import { useCallback } from 'react'

const useCurrencyFormatter = () => {
  const formatarValor = useCallback((valor: number): string => {
    return (valor || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }, [])

  return { formatarValor }
}

export default useCurrencyFormatter
