import { styled, css } from '@mui/material/styles'

export const Container = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 auto;
    padding: 16px;
    z-index: 10;
    width: 100%;

    @media (min-width: ${theme.breakpoints.values.sm}px) {
      padding: 16px 75px;
    }
    @media (min-width: ${theme.breakpoints.values.md}px) {
      padding: 16px 100px;
    }
  `}
`
