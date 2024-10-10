import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import * as S from './styles'



export type BaseTemplateProps = {
  children: React.ReactNode
}

const BaseHome = ({ children }: BaseTemplateProps) => {
  return (
    <>
      <Header />
      <Container>
        <S.Content>{children}</S.Content>

      </Container>
    </>
  )
}

export default BaseHome
