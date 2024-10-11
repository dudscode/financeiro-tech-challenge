import { styled, css } from '@mui/material/styles'
import { Container as Content } from '@/components/Container'
import { Modal } from '@/components/Modal'

export const Container = styled('div')`
  z-index: 5;
  position: relative;
  width: 100%;
`
export const Wrapper = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    height: 96px;
    color: #fff;
    background-color: ${theme.palette.primary.main};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const ContentUI = styled(Content)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width: ${theme.breakpoints.values.sm}px) {
      justify-content: flex-end;
    }
  `}
`

export const Button = styled('button')``

export const MenuContainer = styled('div')`
  ${({ theme }) => css`
    position: relative;
    @media (min-width: ${theme.breakpoints.values.sm}px) {
      display: none;
    }
  `}
`

export const ModalUI = styled(Modal)`
  position: absolute;
  left: 0;
  top: 0;
  padding: 24px;
`
