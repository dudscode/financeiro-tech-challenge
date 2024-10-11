'use client'

import { useState } from 'react'
import * as S from './styles'
import I from '@/components/Icons'
import { Menu } from '@/components/Menu'
import { Account } from '@/components/Account'
import { MENU } from '@/config/menu'
import theme from '../../../styles/theme'
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentUI>
          <S.MenuContainer>
            <S.Button onClick={() => setIsOpen(!isOpen)}>
              <I.Menu htmlColor={theme.palette.error.main} fontSize='large' />
            </S.Button>
          </S.MenuContainer>
          <Account />
        </S.ContentUI>
      </S.Wrapper>
      <S.ModalUI isOpen={isOpen} callback={setIsOpen} bgColor={theme.palette.background.default}>
        <Menu list={MENU} />
      </S.ModalUI>
    </S.Container>
  )
}
