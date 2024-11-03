import { styled, css } from '@mui/material/styles'
import { Container as ContainerMUI } from '@mui/material'

export const Container = styled(ContainerMUI)`
  ${({ theme }) => css`
    max-width: 100%;
    padding: 24px;
    display: flex;
    gap: 24px;
    position: relative;
    height: auto;

    @media (min-width: ${theme.breakpoints.values.md}${theme.breakpoints.unit}) {
      max-width: var(--max-width);
      margin: 0 auto;
    }

    &:empty {
      display: none;
    }
  `}
`
