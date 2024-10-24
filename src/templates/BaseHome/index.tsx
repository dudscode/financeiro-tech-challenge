import { Container } from '@/components/Container'
import * as S from './styles'
import { HeaderHome } from '@/components/HeaderHome'
import { FooterHome } from '@/components/FooterHome'



export type BaseTemplateProps = {
  children: React.ReactNode
}

const BaseHome = ({ children }: BaseTemplateProps) => {

  return (
    <>
      <HeaderHome/>
      <Container>
        <S.Content>{children}</S.Content>
      </Container>
      <FooterHome/>
    </>
  )
}

export default BaseHome
