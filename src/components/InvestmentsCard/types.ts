export interface InvestmentsCardProps {
  title: string
  total: string
  rendaVariavel: string
  rendaFixa: string
  chartData: IChartData[]
}

export interface RendaProps {
  title: string
  value: string
}

export interface ISizeChart {
  width: number
  height: number
}

export interface ChartEstatiscaProps {
  isMobile: boolean
  sizeChartContainer: ISizeChart
  chartData: IChartData[]
}

interface IChartData {
  id: number
  value: number
  label: string
  color: string
}
