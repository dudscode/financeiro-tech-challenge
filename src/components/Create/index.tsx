import React, { useState } from 'react'
import * as S from './styles'
import { Input } from '@/components/Input'
import { Checkbox } from '@/components/Checkbox'
import { Button } from '@/components/Button'
import { FullModal } from '../FullModal'
import { useCreate } from '@/hooks/useCreate'
import { MyContext } from '@/templates/BaseHome'

type CreateProps = {
  isOpen: boolean
  callback?: (value: boolean) => void
}

export const Create = ({ isOpen, callback }: CreateProps) => {
  const { create } = useCreate()
  const [loading, setLoading] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [term, setTerm] = useState(false)

  const submit = async (context: any) => {
    if (!!email && !!password && !!name) {
      setLoading(true)
      create(email, password, name)
        .then(data => {
          setLoading(false)
          setPassword('')
          setEmail('')
          setName('')
          context.create.setOpenCreate(false, 'login')
        })
        .catch(() => {
          setLoading(false)
          setPassword('')
          setEmail('')
          setName('')
        })
    }
  }

  return (
    <MyContext.Consumer>
      {context => {
        return (
          <FullModal initialState={false} state={isOpen} callback={callback}>
            <S.Image src='images/login.png' />
            <S.Text>Preencha os campos abaixo para criar sua conta corrente!</S.Text>
            <S.FormContainer>
              <Input label='Nome' placeholder='Digite seu nome completo' onChange={setName} value={name} />
              <Input label='Email' placeholder='Digite seu email' onChange={setEmail} value={email} />
              <Input label='Senha' placeholder='Digite sua senha' onChange={setPassword} value={password} />
              <Checkbox
                list={[
                  {
                    id: 'terms',
                    text: 'Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco.',
                    checked: term
                  }
                ]}
                callback={list => setTerm(list[0].checked ?? term)}
              />
              <Button
                size='large'
                color='error'
                type='button'
                disabled={[!term, !name, !email, !password].some((item: boolean) => !!item === true)}
                onClick={() => submit(context)}
              >
                {loading ? 'Loading...' : 'Criar Conta'}
              </Button>
            </S.FormContainer>
          </FullModal>
        )
      }}
    </MyContext.Consumer>
  )
}
