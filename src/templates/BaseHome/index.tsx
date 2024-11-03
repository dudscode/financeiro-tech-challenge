import { useState } from 'react'
import { Container } from '@/components/Container'
import * as S from './styles'
import { HeaderHome } from '@/components/HeaderHome'
import { FooterHome } from '@/components/FooterHome'
import { Login } from '@/components/Login'
import { Create } from '@/components/Create'
import { ToastContainer } from 'react-toastify'

import { createContext } from 'react'

export type BaseTemplateProps = {
  children: React.ReactNode
}

type MyContextType = {
  login: {
    openLogin: boolean
    setOpenLogin: (open: boolean, type: string) => void
  }
  create: {
    openCreate: boolean
    setOpenCreate: (open: boolean, type: string) => void
  }
}

export const MyContext = createContext({} as MyContextType)

const BaseHome = ({ children }: BaseTemplateProps) => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)

  const openModal = (open: boolean, type: string) => {
    type === 'login' && setOpenLogin(open)
    type === 'create' && setOpenCreate(open)
  }

  return (
    <MyContext.Provider value={{ login: { openLogin, setOpenLogin }, create: { openCreate, setOpenCreate } }}>
      <HeaderHome callback={openModal} />
      <ToastContainer />
      <Container sx={{ padding: '24px 0' }}>
        <S.Content>{children}</S.Content>
      </Container>
      <FooterHome />
      <Login isOpen={openLogin} callback={setOpenLogin} />
      <Create isOpen={openCreate} callback={setOpenCreate} />
    </MyContext.Provider>
  )
}

export default BaseHome
