import { MyAccount } from '@/components/MyAcoount'
import Base from '@/templates/Base'

export default function Home() {
  return (
    <Base hideExtrato>
      <MyAccount />
    </Base>
  )
}
