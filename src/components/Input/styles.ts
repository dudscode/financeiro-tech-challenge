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
`

export const Label = styled('label')`
  ${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightBold};
    font-size: ${theme.typography.fontSize}px;
    color: ${theme.palette.text.primary};
  `}
`

export const Input = styled('input')<{ status?: Status }>`
  ${({ theme, status }) => css`
    width: 100%;
    background-color: ${theme.palette.common.white};
    border: 1px solid ${theme.palette.grey[300]};
    border-radius: 8px;
    padding: 15px 16px;
    outline: 0;
    ${status &&
    css`
      border: 1px solid ${getStatusColor(theme, status)};
    `}
    &::placeholder {
      color: ${theme.palette.grey[500]};
      font-size: ${theme.typography.fontSize};
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.fontWeightRegular};
    }
  `}
`

export const Message = styled('span')<{ status?: Status }>`
  ${({ theme, status }) => css`
    font-weight: ${theme.typography.fontWeightRegular};
    font-size: 14px;
    color: ${getStatusColor(theme, status)};
  `}
`
