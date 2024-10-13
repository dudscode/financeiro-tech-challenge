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
  /**
   * Função de callback
   */
  callback?: (value: string) => void
}

export const Input = ({ placeholder, label, message, error = false, callback }: InputProps) => {
  const status = error ? 'error' : undefined

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    callback && callback(event.target.value)
  }

  return (
    <S.Container>
      {label && <S.Label htmlFor='input'>{label}</S.Label>}
      <FormControl fullWidth variant='outlined' color={status} focused={!!status}>
        <S.Input id='input' placeholder={placeholder} onChange={onChange} />
        <S.Message id='message' error={status === 'error'}>
          {message}
        </S.Message>
      </FormControl>
    </S.Container>
  )
}
