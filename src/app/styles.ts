import { styled, css } from '@mui/material/styles'
import { Button } from '@/components/Button'

export const Container = styled('div')`
  bottom: 0;
  background: linear-gradient(180deg, #004d61 0%, #ffffff 100%);

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const Title = styled('div')`
  ${({ theme }) => css`
    color: ${theme.palette.text.primary};
    font-weight: ${theme.typography.fontWeightBold};
    margin: 0 auto;
    font-size: 28px;
    font-weight: 600px;
    width: 434px;
    max-width: 100%;

    @media (max-width: 1024px) {
      text-align: center;
      display: flex;
      align-items: center;
    }
    @media (max-width: 600px) {
      margin-top: 20px;
    }
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

    @media (max-width: 600px) {
      display: flex;
      align-items: center;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 20px;
      margin-bottom: 35px;
    }
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

  @media (max-width: 1024px) {
    margin-left: 20%;
  }
  @media (max-width: 600px) {
    margin: 0 auto;
    width: 100%;
    justify-content: center;
  }
`

export const BannerImage = styled('div')`
  background-image: url('/images/banner-home.png');
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
  margin-top: 35px;

  @media (max-width: 600px) {
    height: 200px;
  }
`

export const Buttons = styled('div')`
  margin: 0 auto;
  display: flex;
  gap: 20px;
`

export const ButtonUI = styled(Button)`
  ${({ theme, variant }) => css`
    ${variant !== 'outlined' &&
    css`
      background-color: ${theme.palette.common.black};
    `};
    border: 2px solid ${theme.palette.common.black} !important;
  `}
`
