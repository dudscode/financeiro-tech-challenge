import React, { useState } from 'react'
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

  const submit = async () => {
    if (!!email && !!password) {
      setLoading(true)
      login(email, password).then(data => {
        setLoading(false)
        if (!data.access) {
          setAccess(data)
          return
        }
        setPassword('')
        setEmail('')
        window.location.href = '/dashboard'
      })
    }
  }

  return (
    <FullModal initialState={false} state={isOpen} callback={callback}>
      <S.Image src='images/cadastro.png' />
      <S.Text>Login</S.Text>
      <S.FormContainer>
        <Input
          label='Email'
          placeholder='Digite seu email'
          onChange={setEmail}
          message={access.message}
          error={!!access.error}
          value={email}
        />
        <S.InputContainer>
          <Input label='Senha' placeholder='Digite sua senha' type='password' onChange={setPassword} value={password} />
          <S.Link
            underline='always'
            onClick={() => {
              console.info("I'm a button.")
            }}
          >
            Esqueci a senha!
          </S.Link>
        </S.InputContainer>
        <Button size='large' color='success' type='button' disabled={loading || !(email && password)} onClick={submit}>
          {loading ? 'Loading...' : 'Acessar'}
        </Button>
      </S.FormContainer>
    </FullModal>
  )
}
