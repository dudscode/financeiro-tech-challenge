import { styled, css } from '@mui/material/styles'
import { Box, Theme, Typography } from '@mui/material'
import theme from '../../../styles/theme'

interface IParagraph {
  /**
   * text size
   */
  txt?: string
  /**
   * margin bottom
   */
  mb?: string
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
    z-index: 10;
    width: 100%;
    padding: 32px 40px 40px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${theme.breakpoints.values.sm}${theme.breakpoints.unit}) {
      align-items: flex-start;
    }
  `}
`
export const Title = styled(Typography)`
  margin-bottom: 32px;
`

export const ContainerRenda = styled('section')`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    @media (min-width: ${theme.breakpoints.values.sm}${theme.breakpoints.unit}) {
      flex-direction: row;
    }
  `}
`
export const renda = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    padding: 16px 32px;
    background: ${theme.palette.primary.main};
    border-radius: 8px 8px 8px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

type Types = {
  [key: string]: (theme: Theme) => string
}
const types: Types = {
  default: theme => theme.palette.primary.contrastText,
  valor: theme => theme.palette.primary.main,
  info: theme => theme.palette.text.disabled,
  titulo: theme => theme.palette.text.primary
}
export const Paragraph = styled('p')<IParagraph>`
  ${({ theme, txt = '12px', mb = 0, weight = 400, type = 'default' }) => css`
    color: ${types[type](theme)};
    font-size: ${txt};
    font-weight: ${weight};
    margin-bottom: ${mb};
  `}
`

export const ContainerEstatistica = styled('section')`
  ${({ theme }) => css`
    width: 100%;
    padding: 32px 16px 0px;
    border-radius: 8px 8px 8px 8px;
    background: ${theme.palette.primary.main};
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`
export const legend = styled('p')`
  ${({ theme }) => css`
    color: ${theme.palette.primary.contrastText};
  `}
`
export const BoxGrafico = styled(Box)`
  min-height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
`
