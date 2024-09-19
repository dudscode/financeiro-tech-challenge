import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
)

export default Base
