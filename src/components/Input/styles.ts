import { FormHelperText, InputLabel, OutlinedInput } from '@mui/material'
import { styled, css } from '@mui/material/styles'

export const Container = styled('div')`
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
    bottom: -22px;
    left: 0;
  `}
`
