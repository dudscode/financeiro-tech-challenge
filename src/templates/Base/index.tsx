import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Menu } from '@/components/Menu'
import { MENU } from '@/config/menu'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <>
    <Header />
    <Container>
      <Menu list={MENU} isHorizontal className='hide--mobile hide--desktop' />
    </Container>
    <Container>{children}</Container>
  </>
)

export default Base
