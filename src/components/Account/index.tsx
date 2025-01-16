import { useRouter } from 'next/navigation'
import * as S from './styles'
import I from '@/components/Icons'
import { useEffect, useState } from 'react'

export const Account = () => {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/minha-conta')
  }
  const [userName, setUserName] = useState('Nome do usuario logado')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const auth = sessionStorage.getItem('auth')
      if (auth) {
        const name = JSON.parse(auth).userName
        setUserName(name)
      }
    }
  }, [])

  return (
    <S.Container>
      <S.AccountContainer onClick={handleRedirect}>
        <S.User> {userName}</S.User>
        <S.Button>
          <I.Account fontSize='large' />
        </S.Button>
      </S.AccountContainer>
    </S.Container>
  )
}
