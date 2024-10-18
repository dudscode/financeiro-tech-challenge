import * as S from './styles'

export interface LinkProps {
  /**
   * Link contents
   */
  children: string
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Optional Link color
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  /**
   * Optional underline style
   */
  underline?: 'none' | 'hover' | 'always'
}

export const Link = ({ children, color = 'primary', underline = 'none', ...props }: LinkProps) => {
  return (
    <S.Link {...{ color, underline }} {...props}>
      {children}
    </S.Link>
  )
}
