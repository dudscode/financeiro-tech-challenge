import * as S from './styles'

type MessageProps = {
  error?: string
  success?: string
  warning?: string
}

export type Status = 'error' | 'success' | 'warning'

type InputProps = {
  /**
   * Texto descritivo do input
   */
  placeholder?: string
  /**
   * Texto label
   */
  label?: string
  /**
   * Feedback do input
   */
  message?: MessageProps
  /**
   * Status do input
   */
  status?: Status
}

const getStatus = (status?: Status, message?: MessageProps) => {
  switch (status) {
    case 'error':
      return message?.error
    case 'success':
      return message?.success
    case 'warning':
      return message?.warning
    default:
      return ''
  }
}

export const Input = ({ placeholder, label, message, status }: InputProps) => {
  const statusMessage = getStatus(status, message)
  return (
    <S.Container>
      {label && <S.Label htmlFor='input'>{label}</S.Label>}
      <S.Input placeholder={placeholder} status={status} />
      {!!statusMessage && <S.Message status={status}>{statusMessage}</S.Message>}
    </S.Container>
  )
}
