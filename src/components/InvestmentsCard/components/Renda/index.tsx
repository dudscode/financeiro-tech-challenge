import * as S from '@/components/InvestmentsCard/styles'
import { RendaProps } from '@/components/InvestmentsCard/types'

export const Renda: React.FC<RendaProps> = ({ title, value }) => (
  <S.renda>
    <S.Paragraph txt='16px' type='info'>
      {title}
    </S.Paragraph>
    <S.Paragraph txt='20px'>R$ {value} </S.Paragraph>
  </S.renda>
)
