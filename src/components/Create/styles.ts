import { styled, css } from '@mui/material/styles'

export const Image = styled('img')`
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 32px;
`

export const Text = styled('p')`
  ${({ theme }) => css`
    color: ${theme.palette.text.primary};
    font-weight: ${theme.typography.fontWeightBold};
    margin-bottom: 32px;
  `}
`

export const FormContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`
