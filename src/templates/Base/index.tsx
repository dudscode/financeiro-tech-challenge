import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Menu } from '@/components/Menu'
import { MENU } from '@/config/menu'
import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <>
    <Header />
    <Container>
      <Menu list={MENU} />
    </Container>
    <Container>
      <S.SideBar>
        <Menu list={MENU} />
      </S.SideBar>
      {children}
    </Container>
  </>
)

export default Base
