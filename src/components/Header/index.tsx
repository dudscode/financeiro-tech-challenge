'use client'

import { useState } from 'react'
import { Container, ContentUI, Button, MenuContainer, ModalUI, Wrapper, AccountContainer } from './styles'
import { Icon } from '@/components/Icons'
import { Menu } from '@/components/Menu'
import { Account } from '@/components/Account'
import { MENU } from '@/config/menu'
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container>
      <Wrapper>
        <ContentUI>
          <MenuContainer>
            <Button onClick={() => setIsOpen(!isOpen)}>
              <Icon icon='menu' alt='icone hamburguer de menu' />
            </Button>
          </MenuContainer>
          <Account />
        </ContentUI>
      </Wrapper>
      <ModalUI isOpen={isOpen} callback={setIsOpen} bgColor='#e4ede3'>
        <Menu list={MENU} colorHighlight='#FF5031' />
      </ModalUI>
    </Container>
  )
}
