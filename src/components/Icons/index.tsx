import * as S from './styled'
export interface IIconProps {
  /**
   * nome do icone
   */
  icon: string
  /**
   * descrição do icone
   */
  alt: string
  /**
   * largura do icone
   */
  width?: string
  /**
   * altura do icone
   */
  height?: string
}

export const Icon = ({ icon, alt, width = '24px', height = '24px' }: IIconProps) => {
  return (
    <S.Container width={width} height={height}>
      <S.Image src={`/assets/svg/${icon}.svg`} alt={alt} width={width} height={height} />
    </S.Container>
  )
}
