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

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  flex: 2 1 100%;
`

export const Main = styled('main')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    @media (min-width: ${theme.breakpoints.values.md + 1}${theme.breakpoints.unit}) {
      flex-direction: row;
    }
  `}
`
