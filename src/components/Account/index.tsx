import { Container, Button, AccountContainer, User } from './styles'
import { Icon } from '@/components/Icons'

export const Account = () => {
  return (
    <Container>
      <AccountContainer>
        <User>Nome do usuario logado</User>
        <Button>
          <Icon icon='account' alt='icone de account' width='40px' height='40px' />
        </Button>
      </AccountContainer>
    </Container>
  )
}
