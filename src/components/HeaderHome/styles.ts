import { styled, css } from '@mui/material/styles'
import { Container as Content } from '@/components/Container'
import { Modal } from '@/components/Modal'
import theme from '../../../styles/theme'

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
    background-color: ${theme.palette.common.black};
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

export const WithoutMenuContainer = styled('div')`
  display: flex;
  width: 90%;
  justify-content: space-between;
`

export const Logo = styled('img')`
    max-width: 145.688px;
    max-height: 32px;
`
export const LinkContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 24px;
`
export const Link = styled('a')`
  color: ${theme.palette.text.secondary};
  font-weight: 600;
  font-size: 18px;
  :hover {
    color: ${theme.palette.secondary.light};
  }

`
export const TextButton = styled('p')`
  color: ${theme.palette.text.secondary};
`