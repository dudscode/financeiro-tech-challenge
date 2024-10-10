import { styled, css } from '@mui/material/styles'
import ButtonUI from '@mui/material/Button'

type ButtonProps = {
  isFull?: boolean
  color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
}

export const Button = styled(ButtonUI)<ButtonProps>`
  ${({ theme, isFull, color }) => css`
    font-size: ${theme.typography.fontSize}px;
    text-transform: initial;
    font-weight: ${theme.typography.fontWeightMedium};
    font-family: ${theme.typography.fontFamily};
    color: ${theme.palette?.[color]?.contrastText};
    border-radius: 8px;
    ${isFull &&
    css`
      width: 100%;
    `}
  `}
`
