import { useState } from 'react'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import * as S from './styles'
import { Login } from '@/components/Login'
import { Create } from '@/components/Create'
import { Button } from '@/components/Button'
import { Row, Col } from '@/components/Grid'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const BaseHome = ({ children }: BaseTemplateProps) => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)

  const toogleModal = (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    setOpenLogin(false)
    setOpenCreate(false)
    setOpen(true)
  }

  return (
    <>
      <Header />
      <Container>
        <Button onClick={() => toogleModal(setOpenLogin)}>Login</Button>
        <Button onClick={() => toogleModal(setOpenCreate)}>Cadastro</Button>
        <S.Content>{children}</S.Content>
      </Container>
      <Login isOpen={openLogin} />
      <Create isOpen={openCreate} />
    </>
  )
}

export default BaseHome
