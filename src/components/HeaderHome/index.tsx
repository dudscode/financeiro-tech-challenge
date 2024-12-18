'use client'

import { useState } from 'react'
import * as S from './styles'
import I from '@/components/Icons'
import { Menu } from '@/components/Menu'
import { MENU_HOME } from '@/config/menu'
import theme from '../../../styles/theme'
import useIsMobile from '@/hooks/useIsMobile'
import useIsTablet from '@/hooks/useIsTablet'
import { Button } from '@/components/Button'

type HeaderHomeProps = {
  callback: (open: boolean, type: string) => void
}

export const HeaderHome = ({ callback }: HeaderHomeProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  return (
    <S.Container>
      <S.Wrapper>
        {isMobile && (
          <S.ContentUI>
            <S.MenuContainer>
              <S.Button onClick={() => setIsOpen(!isOpen)}>
                <I.Menu htmlColor={theme.palette.secondary.dark} fontSize='large' />
              </S.Button>
            </S.MenuContainer>
            <S.Logo src='/images/Logo-web.png' alt='Logo Bytebank'></S.Logo>
          </S.ContentUI>
        )}
        {!isMobile && (
          <S.WithoutMenuContainer>
            <S.Logo src={isTablet ? '/images/Logo-tablet.png' : '/images/Logo-web.png'} alt='Logo Bytebank'></S.Logo>
            <S.LinkContainer
              sx={{
                marginRight: 'auto'
              }}
            >
              <S.Link href='/'>Sobre</S.Link>
              <S.Link href='/'>Serviços</S.Link>
            </S.LinkContainer>
            <S.LinkContainer>
              <Button variant='contained' color='success' size='small' onClick={() => callback(true, 'create')}>
                {isTablet ? 'Abrir conta' : 'Abrir minha conta'}
              </Button>
              <Button isHeader variant='outlined' color='success' size='small' onClick={() => callback(true, 'login')}>
                Já tenho conta
              </Button>
            </S.LinkContainer>
          </S.WithoutMenuContainer>
        )}
      </S.Wrapper>
      <S.ModalUI
        isOpen={isOpen}
        callback={setIsOpen}
        bgColor={theme.palette.background.default}
        closeColor={theme.palette.common.black}
      >
        <Menu
          list={[
            ...MENU_HOME,
            { click: () => callback(true, 'create'), label: 'Abrir conta' },
            { click: () => callback(true, 'login'), label: 'Já tenho conta' }
          ]}
        />
      </S.ModalUI>
    </S.Container>
  )
}
