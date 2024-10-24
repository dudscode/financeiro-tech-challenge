import { styled, css } from '@mui/material/styles'
import { Link as LinkComponent } from '@/components/Link'

export const Image = styled('img')`
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 32px;
`

export const Text = styled('p')`
  ${({ theme }) => css`
    color: ${theme.palette.text.primary};
    font-weight: ${theme.typography.fontWeightBold};
    margin: 0 auto;
    margin-bottom: 32px;
  `}
`

export const FormContainer = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  width: 100%;
`

export const Link = styled(LinkComponent)`
  margin-right: auto;
`

export const InputContainer = styled('div')`
  width: 100%;
`
