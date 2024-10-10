import { styled, css } from '@mui/material/styles'
import ButtonUI from '@mui/material/Button'

type ButtonProps = {
  isFull?: boolean
  isLong?: boolean
  color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
}

export const Button = styled(ButtonUI)<ButtonProps>`
  ${({ theme, isFull, isLong, color }) => css`
    font-size: ${theme.typography.fontSize}px;
    text-transform: initial;
    font-weight: ${theme.typography.fontWeightMedium};
    font-family: ${theme.typography.fontFamily};
    color: ${theme.palette?.[color]?.contrastText};
    border-radius: 8px;
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
