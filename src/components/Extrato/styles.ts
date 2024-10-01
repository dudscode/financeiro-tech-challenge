import { styled, css } from '@mui/material/styles'
import { Typography } from '@mui/material'
import Hr from '@mui/material/Divider'
import { Theme } from '@mui/material/styles/createThemeNoVars'

export interface IParagraph {
  /**
   * text size
   */
  txt?: string
  /**
   * margin bottom
   */
  md?: string
  /**
   * font weight
   */
  weight?: string
  /**
   * text type
   */
  type?: string
}

export const Container = styled('section')`
  ${({ theme }) => css`
    width: 100%;
    padding: 32px 24px;
    border-radius: 8px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 2 100%;
    @media (min-width: ${theme.breakpoints.values.sm}${theme.breakpoints.unit}) {
      align-items: center;
    }
    @media (min-width: ${theme.breakpoints.values.lg}${theme.breakpoints.unit}) {
      max-width: 280px;
    }
  `}
`

export const List = styled('ul')`
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Item = styled('li')``

export const Title = styled(Typography)`
  margin-bottom: 24px;
`

export const TextHighlight = styled('p')`
  ${({ theme }) => css`
    color: ${theme.palette.secondary.dark};
    font-weight: 600;
    margin-bottom: 8px;
  `}
`

export const TextContaine = styled('div')`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`

type Types = {
  [key: string]: (theme: Theme) => string
}

const types: Types = {
  default: theme => theme.palette.text.primary,
  info: theme => theme.palette.text.disabled
}

export const Paragraph = styled('p')<IParagraph>`
  ${({ theme, txt = '12px', md = 0, weight = 400, type = 'default' }) => css`
    color: ${types[type](theme)};
    font-size: ${txt};
    font-weight: ${weight};
    margin-bottom: ${md};
  `}
`

export const Divider = styled(Hr)`
  ${({ theme }) => css`
    width: 70%;
    margin-top: 8px;
    border-color: ${theme.palette.secondary.dark};
  `}
`
