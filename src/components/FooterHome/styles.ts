import { styled, css } from '@mui/material/styles'
import { Container as Content } from '@/components/Container'
import { Modal } from '@/components/Modal'
import theme from '../../../styles/theme'

export const Container = styled('footer')`
 position: absolute;
 bottom: 0;
  width: 100%;
  `
export const Wrapper = styled('div')`
  width: 100%;
  color: #fff;
  background-color: ${theme.palette.common.black};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Footer = styled('div')`
    display: flex;
    width: 80%;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 32px;
    padding: 32px;
    @media (min-width: ${theme.breakpoints.values.sm}${theme.breakpoints.unit}) {
      padding: 0px ;
      flex-direction: row;
      gap: 10px;
      width: 90%;
    }
    @media (min-width: ${theme.breakpoints.values.lg}${theme.breakpoints.unit}) {
      flex-direction: row;
      padding: 32px;
    }
`
export const FooterContainerItem = styled('div')`
    display: flex;
    flex-direction: column;
    max-width: 282px;
    gap: 16px;
`
export const TextDescription = styled('p')`
  font-weight: ${theme.typography.fontWeightBold};
  font-size: 16px;
`
export const Text = styled('p')`
  font-size: 16px;
`
export const FooterContainerDevelopment = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 24px;
`
export const Logo = styled('img')`
    max-width: 145.688px;
    max-height: 32px;
`
export const FooterContainerSocialMedia = styled('div')`
    display: flex;
    gap: 24px;
`
export const IconSocial = styled('img')`
    max-width: 145.688px;
    max-height: 32px;
`