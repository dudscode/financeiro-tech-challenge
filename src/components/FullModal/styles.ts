import { styled, css } from '@mui/material/styles'
import { Modal as ModalComponent } from '@/components/Modal'

export const Container = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 auto;
    padding: 16px;
    z-index: 10;
    width: 100%;

    @media (min-width: ${theme.breakpoints.values.sm}px) {
      padding: 16px 75px;
    }
    @media (min-width: ${theme.breakpoints.values.md}px) {
      padding: 16px 100px;
    }
  `}
`
export const Modal = styled(ModalComponent)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`
