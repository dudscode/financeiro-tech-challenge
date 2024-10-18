import React from 'react'
import * as S from './styles'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { FullModal } from '../FullModal'

type LoginProps = {
  isOpen: boolean
}

export const Login = ({ isOpen }: LoginProps) => {
  return (
    <FullModal initialState={isOpen}>
      <S.Image src='images/cadastro.png' />
      <S.Text>Login</S.Text>
      <S.FormContainer>
        <Input label='Email' placeholder='Digite seu email' />
        <S.InputContainer>
          <Input label='Senha' placeholder='Digite sua senha' type='password' />
          <S.Link
            underline='always'
            onClick={() => {
              console.info("I'm a button.")
            }}
          >
            Esqueci a senha!
          </S.Link>
        </S.InputContainer>
        <Button size='large' color='success'>
          Acessar
        </Button>
      </S.FormContainer>
    </FullModal>
  )
}
