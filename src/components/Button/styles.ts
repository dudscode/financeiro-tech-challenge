import { styled, css } from '@mui/material/styles'
import ButtonUI from '@mui/material/Button'

type ButtonProps = {
  isFull?: boolean
  isLong?: boolean
  color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  radius?: boolean
  width?: string
}

export const Button = styled(ButtonUI)<ButtonProps>`
  ${({ theme, isFull, isLong, color, radius, width }) => css`
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
  `}
`
