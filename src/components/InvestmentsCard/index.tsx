import React from 'react'
import * as S from '@/components/InvestmentsCard/styles'
import useIsMobile from '@/hooks/useIsMobile'
import useIsTablet from '@/hooks/useIsTablet'
import GreyCard from '@/components/CardGrey'
import { ISizeChart, InvestmentsCardProps } from '@/components/InvestmentsCard/types'
import { ChartEstatistica } from '@/components/InvestmentsCard/components/ChartEstatistica'
import { Renda } from '@/components/InvestmentsCard/components/Renda'
export const InvestmentsCard: React.FC<InvestmentsCardProps> = ({
  title,
  total,
  rendaVariavel,
  rendaFixa,
  chartData
}) => {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const sizeChartContainer = sizeChart(isMobile, isTablet)
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
        <ChartEstatistica isMobile={isMobile} sizeChartContainer={sizeChartContainer} chartData={chartData} />
      </S.Container>
    </GreyCard>
  )
}

const sizeChart = (isMobile: boolean, isTablet: boolean): ISizeChart => {
  if (isMobile) {
    return { width: 300, height: 400 }
  } else if (isTablet) {
    return { width: 600, height: 200 }
  } else {
    return { width: 700, height: 200 }
  }
}
