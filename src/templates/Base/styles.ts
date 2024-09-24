import { styled, css } from '@mui/material/styles'

export const SideBar = styled('div')`
  ${({ theme }) => css`
    background-color: ${theme.palette.secondary.light};
    border-radius: 8px;
    width: 180px;
    padding: 15px;
    height: calc(100vh - 100px);
  `}
`
