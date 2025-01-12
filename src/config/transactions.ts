const transactionsType = [
  { value: 'deposit', label: 'Depósito', action: 'sum' },
  { value: 'transfer', label: 'Transferência', action: 'subtraction' },
  { value: 'withdraw', label: 'Saque', action: 'subtraction' },
  { value: 'payment', label: 'Pagamento', action: 'subtraction' },
  { value: 'reversal', label: 'Estorno', action: 'sum' },
  { value: 'loan', label: 'Empréstimo e Financiamento', action: 'sum' },
  { value: 'docted', label: 'DOC/TED', action: 'subtraction' }
]

export default transactionsType

export type TransactionType = 'deposit' | 'transfer' | 'withdraw' | 'payment' | 'reversal' | 'loan' | 'docted'
