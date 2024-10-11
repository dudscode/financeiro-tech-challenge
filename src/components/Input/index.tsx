import * as S from './styles'
import { FormControl } from '@mui/material'

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
  message?: string
  /**
   * Status do input
   */
  error?: boolean
}

export const Input = ({ placeholder, label, message, error = false }: InputProps) => {
  const status = error ? 'error' : undefined
  return (
    <S.Container>
      {label && <S.Label htmlFor='input'>{label}</S.Label>}
      <FormControl fullWidth variant='outlined' color={status} focused={!!status}>
        <S.Input id='input' placeholder={placeholder} />
        <S.Message id='message' error={status === 'error'}>
          {message}
        </S.Message>
      </FormControl>
    </S.Container>
  )
}
