import React, { use, useEffect, useState } from 'react'
import * as S from './styles'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { FullModal } from '../FullModal'
import { useAuth } from '@/hooks/useAuth'

type LoginProps = {
  isOpen: boolean
  callback?: (value: boolean) => void
}

export const Login = ({ isOpen, callback }: LoginProps) => {
  const { login } = useAuth()
  const [access, setAccess] = useState({ access: false, message: '', error: false, loading: false })
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!!email && !!password) {
      setLoading(true)
      const result = await login(email, password)
      setLoading(result.loading)
      if (!result.access) {
        setAccess(result)
        return
      }
      setPassword('')
      setEmail('')
      window.location.href = '/dashboard'
    }
  }

  return (
    <FullModal initialState={false} state={isOpen} callback={callback}>
      <S.Image src='images/cadastro.png' />
      <S.Text>Login</S.Text>
      <S.FormContainer onSubmit={submit}>
        <Input
          label='Email'
          placeholder='Digite seu email'
          onChange={setEmail}
          message={access.message}
          error={!!access.error}
        />
        <S.InputContainer>
          <Input label='Senha' placeholder='Digite sua senha' type='password' onChange={setPassword} />
          <S.Link
            underline='always'
            onClick={() => {
              console.info("I'm a button.")
            }}
          >
            Esqueci a senha!
          </S.Link>
        </S.InputContainer>
        <Button size='large' color='success' type='submit' disabled={loading || !(email && password)}>
          {loading ? 'Loading...' : 'Acessar'}
        </Button>
      </S.FormContainer>
    </FullModal>
  )
}
