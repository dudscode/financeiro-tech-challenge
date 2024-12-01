import { PieChart } from '@mui/x-charts/PieChart'
import * as S from '@/components/InvestmentsCard/styles'
import { ChartEstatiscaProps } from '@/components/InvestmentsCard/types'

export const ChartEstatistica: React.FC<ChartEstatiscaProps> = ({ isMobile, sizeChartContainer, chartData }) => {
  return (
    <>
      <S.Paragraph txt='20px' type='titulo' mb='32px'>
        Estatísticas
      </S.Paragraph>
      <S.ContainerEstatistica>
        <S.BoxGrafico>
          <PieChart
            series={
              [
                {
                  data: chartData,
                  innerRadius: 70,
                  outerRadius: 100,
                  paddingAngle: 0,
                  cornerRadius: 0,
                  startAngle: 0,
                  endAngle: 360,
                  cx: 150,
                  cy: isMobile ? 150 : '50%'
                }
              ]
            }
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
    </>
  )
}
