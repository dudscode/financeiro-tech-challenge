import { styled, css } from '@mui/material/styles'
import ButtonUI from '@mui/material/Button'

type ButtonProps = {
  isFull?: boolean
  isLong?: boolean
  color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  radius?: boolean
  width?: string
  variant?: 'text' | 'outlined' | 'contained'
  isHeader?: boolean
}

export const Button = styled(ButtonUI)<ButtonProps>`
  ${({ theme, isFull, isLong, color, radius, width, variant, isHeader }) => css`
    font-size: ${theme.typography.fontSize}px;
    text-transform: initial;
    font-weight: ${theme.typography.fontWeightBold};
    font-family: ${theme.typography.fontFamily};
    color: ${theme.palette?.[color]?.contrastText};
    border-radius: ${radius ? '50%' : '8px'};
    ${radius &&
    css`
      min-width: auto;
      width: ${width};
      height: ${width};
      padding: 5px;
    `}
    ${isLong &&
    css`
      min-width: 250px;
    `}
    ${isFull &&
    css`
      width: 100%;
    `}
    ${variant === 'outlined' &&
    css`
      font-size: 16px;
      font-weight: 600;
      border-radius: 8px;
      flex: 1 0 auto;
    `}
    ${isHeader &&
    css`
      border: 2px solid ${theme.palette.text.secondary};
      color: ${theme.palette.text.secondary};
    `}
  `}
`
