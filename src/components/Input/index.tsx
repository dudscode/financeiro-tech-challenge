import { useState } from 'react'
import * as S from './styles'
import { FormControl, InputAdornment, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

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
  onChange?: (value: string) => void
  /**
   * Icone no inicio do input
   */
  startIcon?: React.ElementType
  /**
   * Icone no final do input
   */
  endIcon?: React.ElementType
  /**
   * Tipo do input
   */
  type?: 'text' | 'password'
  /**
   * Campo obrigatório
   */
  required?: boolean
}

export const Input = ({
  placeholder,
  label,
  message,
  error = false,
  onChange,
  startIcon,
  endIcon,
  type = 'text',
  required
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const status = error ? 'error' : undefined
  const IconStart = startIcon
  const IconEnd = endIcon

  const startAdornment = IconStart ? (
    <InputAdornment position='start'>
      <IconStart />
    </InputAdornment>
  ) : undefined

  const endAdornment = IconEnd ? (
    <InputAdornment position='end'>
      <IconEnd />
    </InputAdornment>
  ) : undefined

  const passwordAdornment = (
    <InputAdornment position='end'>
      <IconButton
        aria-label='toggle password visibility'
        onClick={() => setShowPassword(!showPassword)}
        onMouseDown={event => event.preventDefault()}
      >
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  )

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value)
  }

  return (
    <S.Container>
      {label && <S.Label htmlFor='input'>{label}</S.Label>}
      <FormControl fullWidth variant='outlined' color={status} focused={!!status}>
        <S.Input
          id='input'
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          onChange={change}
          required={required}
          {...{ startAdornment, endAdornment: type === 'password' ? passwordAdornment : endAdornment }}
        />
        <S.Message id='message' error={status === 'error'}>
          {message}
        </S.Message>
      </FormControl>
    </S.Container>
  )
}
