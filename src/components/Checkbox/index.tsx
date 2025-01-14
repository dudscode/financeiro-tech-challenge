import { useState } from 'react'
import * as S from './styles'
import { FormGroup } from '@mui/material'

type ListProps = {
  /**
   * Identificador do item
   */
  id: string
  /**
   * Texto do item
   */
  text: string
  /**
   * Status do item
   */
  checked?: boolean
}

type InputProps = {
  /**
   * Status do input
   */
  error?: boolean
  /**
   * Lista de opções
   */
  list: ListProps[]
  /**
   * Valor default
   */
  defaultCheck?: string
  /**
   * Mensagem de erro
   */
  errorMessage?: string
  /**
   * Função de callback
   */
  callback?: (list: ListProps[]) => void
}

export const Checkbox = ({ list, error = false, errorMessage, callback }: InputProps) => {
  const [checked, setChecked] = useState(list.map(item => ({ ...item, checked: item.checked || false })))
  const status = error ? 'error' : undefined

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const check = checked.map(item => ({ ...item, checked: item.id === id ? event.target.checked : item.checked }))
    setChecked(check)
    callback && callback(check)
  }

  if (!list.length) {
    return null
  }

  return (
    <S.Container>
      <FormGroup>
        {checked.map(({ id, text, checked }) => (
          <S.Label
            key={id}
            control={<S.CheckboxUI color={status} defaultChecked={checked} onChange={e => onChange(e, id)} />}
            label={text}
            color={status}
          />
        ))}
        {error && errorMessage && <S.Message error={true}>{errorMessage}</S.Message>}
      </FormGroup>
    </S.Container>
  )
}
