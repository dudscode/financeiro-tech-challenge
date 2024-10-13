import { styled, css } from '@mui/material/styles'
import { Container as Content } from '@/components/Container'
import { Modal } from '@/components/Modal'
import theme from '../../../styles/theme'

export const Container = styled('footer')`
 
  width: 100%;
`
export const Wrapper = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    height: 96px;
    color: #fff;
    background-color: ${theme.palette.common.black};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

