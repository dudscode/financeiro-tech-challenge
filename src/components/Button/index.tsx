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
  onClick?: (e: any) => void
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
  /**
   * Optional long button
   */
  isLong?: boolean
  /**
   * Optional disabled button
   */
  disabled?: boolean
  /**
   * Optional button type
   */
  type?: 'button' | 'submit' | 'reset'
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
  disabled = false,
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <S.Button disabled={disabled} {...{ variant, color, size, type }} {...props}>
      {startIcon && <IconButton>{startIcon}</IconButton>}
      {children}
      {endIcon && <IconButton>{endIcon}</IconButton>}
    </S.Button>
  )
}
