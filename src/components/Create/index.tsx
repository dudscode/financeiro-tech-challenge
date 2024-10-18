import React from 'react'
import * as S from './styles'
import { Input } from '@/components/Input'
import { Checkbox } from '@/components/Checkbox'
import { Button } from '@/components/Button'
import { FullModal } from '../FullModal'

type CreateProps = {
  isOpen: boolean
}

export const Create = ({ isOpen }: CreateProps) => {
  return (
    <FullModal initialState={isOpen}>
      <S.Image src='images/login.png' />
      <S.Text>Preencha os campos abaixo para criar sua conta corrente!</S.Text>
      <S.FormContainer>
        <Input label='Nome' placeholder='Digite seu nome completo' />
        <Input label='Email' placeholder='Digite seu email' />
        <Input label='Senha' placeholder='Digite sua senha' />
        <Checkbox
          list={[
            {
              id: 'terms',
              text: 'Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.',
              checked: false
            }
          ]}
        />
        <Button size='large' color='error'>
          Criar Conta
        </Button>
      </S.FormContainer>
    </FullModal>
  )
}
