'use client'

import * as S from './styles'
export const FooterHome = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Footer>
          <S.FooterContainerItem>
            <S.TextDescription>Serviços</S.TextDescription>
            <S.Text>Conta corrente</S.Text>
            <S.Text>Conta PJ</S.Text>
            <S.Text>Cartão de crédito</S.Text>
          </S.FooterContainerItem>

          <S.FooterContainerItem>
            <S.TextDescription>Contato</S.TextDescription>
            <S.Text>0800 004 250 08</S.Text>
            <S.Text>meajuda@bytebank.com.br</S.Text>
            <S.Text>ouvidoria@bytebank.com.br</S.Text>
          </S.FooterContainerItem>

          <S.FooterContainerDevelopment>
            <S.TextDescription>Desenvolvido por Grupo6</S.TextDescription>
            <S.Logo src='/images/Logo-redes-sociais.png' alt='Logo Bytebank' />
            <S.FooterContainerSocialMedia>
              <S.IconSocial src='/images/Instagram.svg' alt='Instagram' />
              <S.IconSocial src='/images/Whatsapp.svg' alt='WhatsApp' />
              <S.IconSocial src='/images/Youtube.svg' alt='Youtube' />
            </S.FooterContainerSocialMedia>
          </S.FooterContainerDevelopment>
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  )
}
