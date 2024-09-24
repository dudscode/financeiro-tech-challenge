import * as S from './styles'
import { Icon } from '@/components/Icons'

export const Account = () => {
  return (
    <S.Container>
      <S.AccountContainer>
        <S.User>Nome do usuario logado</S.User>
        <S.Button>
          <Icon icon='account' alt='icone de account' width='40px' height='40px' />
        </S.Button>
      </S.AccountContainer>
    </S.Container>
  )
}
