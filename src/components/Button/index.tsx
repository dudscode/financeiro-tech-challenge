import * as S from './styles'
import IconButton from '@mui/material/IconButton'

export interface ButtonProps {
  /**
   * Button contents
   */
  children: string
  /**
   * Optional click handler
   */
  onClick?: () => void
  /**
   * Optional button typeStyle
   */
  variant?: 'text' | 'outlined' | 'contained'
  /**
   * Optional button color
   */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  /**
   * Optional button size
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Optional start icon
   */
  startIcon?: React.ReactNode
  /**
   * Optional end icon
   */
  endIcon?: React.ReactNode
  /**
   * Optional full width
   */
  isFull?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  return (
    <S.Button type='button' {...{ variant, color, size }} {...props}>
      {startIcon && <IconButton>{startIcon}</IconButton>}
      {children}
      {endIcon && <IconButton>{endIcon}</IconButton>}
    </S.Button>
  )
}
