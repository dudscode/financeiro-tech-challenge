import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material'
import { styled, css } from '@mui/material/styles'

export const Container = styled('div')``

export const Label = styled(FormControlLabel)``

export const CheckboxUI = styled(Checkbox)``

export const Message = styled(FormHelperText)`
  ${({ theme }) => css`
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightRegular};
    font-size: ${theme.typography.fontSize}px;
    line-height: 20px;
  `}
`
