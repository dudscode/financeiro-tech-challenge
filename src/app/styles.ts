import { styled, css } from '@mui/material/styles'
import theme from '../../../styles/theme'
import { CardMedia as MuiCardMedia } from '@mui/material'

export const Container = styled('div')`
  bottom: 0;
  background: linear-gradient(180deg, #004d61 0%, #ffffff 100%);
`

export const Title = styled('div')`
  ${({ theme }) => css`
    color: ${theme.palette.text.primary};
    font-weight: ${theme.typography.fontWeightBold};
    margin: 0 auto;
    font-size: 28px;
    font-weight: 600px;
    width: 434px;
  `}
`

export const Typography = styled('div')`
  ${({ theme }) => css`
    color: ${theme.palette.text.primary};
    font-weight: ${theme.typography.fontWeightBold};
    margin: 0 auto;
    margin-top: 35px;
    font-size: 28px;
    font-weight: 600px;
    width: 434px;
  `}
`

export const Card = styled('div')`
  margin-top: 35px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 282px;
`
