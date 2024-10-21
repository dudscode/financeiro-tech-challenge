import { useRouter } from 'next/navigation'
import * as S from './styles'
import I from '@/components/Icons'

export const Account = () => {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/minha-conta')
  }

  return (
    <S.Container>
      <S.AccountContainer onClick={handleRedirect}>
        <S.User>Nome do usuario logado</S.User>
        <S.Button>
          <I.Account fontSize='large' />
        </S.Button>
      </S.AccountContainer>
    </S.Container>
  )
}
