import * as S from './styles'
import I from '@/components/Icons'

export const Account = () => {
  return (
    <S.Container>
      <S.AccountContainer>
        <S.User>Nome do usuario logado</S.User>
        <S.Button>
          <I.Account fontSize='large' />
        </S.Button>
      </S.AccountContainer>
    </S.Container>
  )
}
