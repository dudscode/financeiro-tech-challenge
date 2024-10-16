import { FormHelperText, InputLabel, OutlinedInput } from '@mui/material'
import { styled, css } from '@mui/material/styles'
import { Status } from './index'
import { Theme } from '@mui/material/styles'

const getStatusColor = (theme: Theme, status?: Status) => {
  switch (status) {
    case 'error':
      return theme.palette.error.dark
    case 'success':
      return theme.palette.success.main
    case 'warning':
      return theme.palette.warning.dark
    default:
      return theme.palette.text.primary
  }
}

export const Container = styled('div')`
  position: relative;
  width: 100%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .MuiInputBase-root.MuiOutlinedInput-root {
    border-radius: 8px;
  }
`

export const Label = styled(InputLabel)`
  ${({ theme }) => css`
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightBold};
    font-size: ${theme.typography.fontSize}px;
    color: ${theme.palette.text.primary};
  `}
`

export const Input = styled(OutlinedInput)`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize}px;
    background-color: ${theme.palette.common.white};
    input {
      font-size: ${theme.typography.fontSize}px;
      padding: 15px 20px;
    }
    &::placeholder {
      color: ${theme.palette.grey[500]};
      font-size: ${theme.typography.fontSize}px;
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.fontWeightRegular};
    }
  `}
`

export const Message = styled(FormHelperText)`
  ${({ theme }) => css`
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeightRegular};
    font-size: 14px;
    margin: 0;
    position: absolute;
    bottom: -31px;
    left: 0;
  `}
`
