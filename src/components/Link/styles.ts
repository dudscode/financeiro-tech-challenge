import { styled, css } from '@mui/material/styles'
import LinkComponent from '@mui/material/Link'

export const Link = styled(LinkComponent)`
  ${({ theme }) => css`
    font-size: ${theme.typography.fontSize}px;
    font-weight: ${theme.typography.fontWeightMedium};
    font-family: ${theme.typography.fontFamily};
    line-height: 20px;
    cursor: pointer;
    color: ${theme.palette.secondary.dark};
  `}
`
