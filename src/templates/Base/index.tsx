import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Menu } from '@/components/Menu'
import { MENU } from '@/config/menu'
import { Extrato, ITransacao } from '@/components/Extrato'
import * as S from './styles'
import useIsTablet from '@/hooks/useIsTablet'
import useIsMobile from '@/hooks/useIsMobile'



export type BaseTemplateProps = {
  children: React.ReactNode
  hideExtrato?: boolean
}

const Base = ({ children, hideExtrato = false }: BaseTemplateProps) => {
  const isTablet = useIsTablet()
  const isMobile = useIsMobile()
  return (
    <>
      <Header />
      {isTablet && (
        <Container>
          <Menu list={MENU} isHorizontal />
        </Container>
      )}
      <Container>
        <S.Main>
          {!(isTablet || isMobile) && (
            <S.SideBar>
              <Menu list={MENU} />
            </S.SideBar>
          )}
          <S.Content>{children}</S.Content>

          {!hideExtrato && <Extrato title='Extrato' />}
        </S.Main>
      </Container>
    </>
  )
}

export default Base
