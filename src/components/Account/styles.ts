import { styled, css } from '@mui/material/styles'

export const Container = styled('div')`
  position: relative;
`

export const Button = styled('button')``

export const User = styled('p')`
  ${({ theme }) => css`
    font-weight: 600;
    color: #fff;
    display: none;
    @media (min-width: ${theme.breakpoints.values.md}px) {
      display: inline-block;
    }
  `}
`

export const AccountContainer = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`
