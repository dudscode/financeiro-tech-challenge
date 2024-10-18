import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Menu } from '@/components/Menu'
import { MENU } from '@/config/menu'
import { Extrato, ITransacao } from '@/components/Extrato'
import * as S from './styles'
import useIsTablet from '@/hooks/useIsTablet'
import useIsMobile from '@/hooks/useIsMobile'

const transacoes: ITransacao[] = [
  {
    mes: 'Novembro',
    tipo: 'Depósito',
    data: '21/11/2022',
    valor: 'R$ 100'
  },
  {
    mes: 'Dezembro',
    tipo: 'Saque',
    data: '15/12/2022',
    valor: 'R$ 50'
  },
  {
    mes: 'Novembro',
    tipo: 'Transferência',
    data: '21/11/2022',
    valor: '-R$ 500'
  }
]

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

          {!hideExtrato && <Extrato title='Extrato' transacao={transacoes} />}
        </S.Main>
      </Container>
    </>
  )
}

export default Base
