import React from 'react'
import * as S from '@/components/InvestmentsCard/styles'
import useIsMobile from '@/hooks/useIsMobile'
import useIsTablet from '@/hooks/useIsTablet'
import GreyCard from '@/components/CardGrey'
import { InvestmentsCardProps } from '@/components/InvestmentsCard/types'
import { Renda } from '@/components/InvestmentsCard/components/Renda'
import AngularRemoteApp from '../GraficAngularMFE/AngularRemoteApp'
export const InvestmentsCard: React.FC<InvestmentsCardProps> = ({
  title,
  total,
  rendaVariavel,
  rendaFixa,
  chartData
}) => {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  return (
    <GreyCard>
      <S.Container>
        <S.Title variant='h2'>{title}</S.Title>
        <S.Paragraph txt='25px' type='valor' mb='32px'>
          Total: R$ {total}
        </S.Paragraph>
        <S.ContainerRenda>
          <Renda title='Renda Fixa' value={rendaFixa} />
          <Renda title='Renda variável' value={rendaVariavel} />
        </S.ContainerRenda>
        <S.Paragraph txt='25px' type='titulo' mb='32px'>
        Estatísticas
        </S.Paragraph>
        <S.ContainerEstatistica >
        <S.BoxGrafico>
          <AngularRemoteApp />
        </S.BoxGrafico>
        </S.ContainerEstatistica>
        {/* <ChartEstatistica isMobile={isMobile} sizeChartContainer={sizeChartContainer} chartData={chartData} /> */}
      </S.Container>
    </GreyCard>
  )
}

