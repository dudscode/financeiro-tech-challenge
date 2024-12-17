import { styled, css } from '@mui/material/styles'
import { Button } from '@/components/Button'
import { Typography } from '@mui/material'
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

export const CenteredHeading = styled('div')`
  ${({ theme }) => css`
    color: ${theme.palette.text.primary};
    font-weight: ${theme.typography.fontWeightBold};
    margin: 0 auto;
    margin-top: 35px;
    margin-bottom: 1em;
    font-size: 28px;
    font-weight: 600px;

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

export const Card = styled('div')(({ theme }) => ({
  marginBottom: '2em',
  [theme.breakpoints.up('md')]: {}
}))

export const CardTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: '24px !important',
  marginBottom: '0.8em',
  fontWeight: 'bold',
  marginTop: '0.8em',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {}
}))

export const BannerImage = styled('img')(({ theme }) => ({
  width: '100%',
  padding: '20px 5%',
  [theme.breakpoints.up('md')]: {
    paddingRight: '3%'
  }
}))

export const Buttons = styled('div')`
  margin: 0 auto;
  gap: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0px 12px;
`

export const ButtonUI = styled(Button)`
  ${({ theme, variant }) => css`
    flex: 1 0 50%;
    ${variant !== 'outlined' &&
    css`
      background-color: ${theme.palette.common.black};
    `};
    border: 2px solid ${theme.palette.common.black} !important;
  `}
`
