export const formatCurrency = (value: string) => {
  const cleanValue = value.replace(/\D/g, '').replace(/^0+/, '')

  const integerPart = cleanValue.slice(0, -2)
  const decimalPart = cleanValue.slice(-2)

  const formattedInteger = integerPart ? parseInt(integerPart, 10).toLocaleString('pt-BR') : '0'

  return `${formattedInteger},${decimalPart.padStart(2, '0')}`
}
