import { styled, css } from '@mui/material/styles'

export const Container = styled('div')`
  ${({ theme }) => css`
    color: #fff;
    background-color: ${theme.palette.primary.main};
  `}
`
