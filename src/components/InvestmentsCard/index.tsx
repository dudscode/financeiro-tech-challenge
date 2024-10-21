import React from 'react'
import * as S from './styles'
import { PieChart } from '@mui/x-charts/PieChart'
import useIsMobile from '@/hooks/useIsMobile'
import useIsTablet from '@/hooks/useIsTablet'
import GreyCard from '../CardGrey'

export const InvestmentsCard = ({
  title = 'Investimentos',
  total = '50.000.00',
  rendaVariavel = '14.000,00',
  rendaFixa = '36.000,00'
}) => {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const sizeChartContainer = sizeChart(isMobile, isTablet)
  return (
    <GreyCard>
      <S.Container>
        <S.Title variant='h2'>{title}</S.Title>
        <S.Paragraph txt='25px' type='valor' mb='32px'>
          Total: R$ {total}{' '}
        </S.Paragraph>
        <S.ContainerRenda>
          <S.renda>
            <S.Paragraph txt='16px' type='info'>
              Renda Fixa{' '}
            </S.Paragraph>
            <S.Paragraph txt='20px'>R$ {rendaFixa} </S.Paragraph>
          </S.renda>
          <S.renda>
            <S.Paragraph txt='16px' type='info'>
              Renda variável{' '}
            </S.Paragraph>
            <S.Paragraph txt='20px'>R$ {rendaVariavel} </S.Paragraph>
          </S.renda>
        </S.ContainerRenda>
        <S.Paragraph txt='20px' type='titulo' mb='32px'>
          Estatísticas
        </S.Paragraph>
        <S.ContainerEstatistica>
          <S.BoxGrafico>
            <PieChart
              series={[
                {
                  data: [
                    { id: 3, value: 25, label: 'Fundos de investimento', color: 'rgba(37, 103, 249, 1)' },
                    { id: 2, value: 25, label: 'Tesouro Direto', color: 'rgba(143, 60, 255, 1)' },
                    { id: 1, value: 25, label: 'Previdência Privada', color: 'rgba(255, 60, 130, 1)' },
                    { id: 0, value: 25, label: 'Bolsa de Valores', color: 'rgba(241, 130, 61, 1)' }
                  ],
                  innerRadius: 70,
                  outerRadius: 100,
                  paddingAngle: 0,
                  cornerRadius: 0,
                  startAngle: 0,
                  endAngle: 360,
                  cx: 150,
                  cy: isMobile ? 150 : '50%'
                }
              ]}
              width={sizeChartContainer.width}
              height={sizeChartContainer.height}
              slotProps={{
                legend: {
                  direction: 'column',
                  position: {
                    horizontal: isMobile ? 'left' : 'right',
                    vertical: isMobile ? 'bottom' : 'middle'
                  },
                  itemGap: 10,
                  markGap: 16,
                  labelStyle: {
                    fill: 'white',
                    fontSize: '16px',
                    fontFamily: 'Inter'
                  },
                  hidden: false
                }
              }}
            />
          </S.BoxGrafico>
        </S.ContainerEstatistica>
      </S.Container>
    </GreyCard>
  )
}

interface ISizeChart {
  width: number
  height: number
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
