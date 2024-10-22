'use client'

import { useState } from 'react'
import * as S from './styles'
import I from '@/components/Icons'
import { Menu } from '@/components/Menu'
import { MENU_HOME } from '@/config/menu'
import theme from '../../../styles/theme'
import useIsMobile from '@/hooks/useIsMobile';
import useIsTablet from '@/hooks/useIsTablet'
import { Button } from '../Button'
import { Login } from '@/components/Login'
import { Create } from '@/components/Create'

export const HeaderHome = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const [openLogin, setOpenLogin] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)

  const toogleModal = (setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    setOpenLogin(false)
    setOpenCreate(false)
    setOpen(true)
  }

  return (
    <>

      <S.Container>
        <S.Wrapper>
          {(isMobile) && (
            <S.ContentUI>
              <S.MenuContainer>
                <S.Button onClick={() => setIsOpen(!isOpen)}>
                  <I.Menu htmlColor={theme.palette.secondary.dark} fontSize='large' />
                </S.Button>
              </S.MenuContainer>
            </S.ContentUI>
          )}
          {(!isMobile) && (
            <S.WithoutMenuContainer>
              <S.Logo src={isTablet ? '/images/Logo-tablet.png' : '/images/Logo-web.png'} alt='Logo Bytebank'></S.Logo>
              <S.LinkContainer>
                <S.Link href='/'>Sobre</S.Link>
                <S.Link href='/'>Serviços</S.Link>
              </S.LinkContainer>
              <S.LinkContainer>
                <Button variant='contained' color='success' size='small' onClick={() => toogleModal(setOpenCreate)}>
                  Abrir minha conta
                </Button>
                <Button variant='outlined' color='success' size='small' onClick={() => toogleModal(setOpenLogin)}>
                  Já tenho conta
                </Button>
              </S.LinkContainer>
            </S.WithoutMenuContainer>
          )}

        </S.Wrapper>
        <S.ModalUI isOpen={isOpen} callback={setIsOpen} bgColor={theme.palette.background.default} closeColor={theme.palette.common.black}>
          <Menu list={MENU_HOME} />
        </S.ModalUI>
      </S.Container>
      <Login isOpen={openLogin} />
      <Create isOpen={openCreate} />
    </>
  )
}