import { styled, css } from '@mui/material/styles'
import { Typography, Divider } from '@mui/material'
import theme from '../../../styles/theme'

export const Container = styled('div')`
  ${({ theme }) => css`
    width: 600px;
    height: 402px;
    background: #004d61;
    border-radius: 8px 8px 8px 8px;
    display: flex;
    flex-direction: column;
    padding: 24px;
    color: #ffffff;
    position: relative;
    gap: 0px;

    @media (max-width: ${theme.breakpoints.values.md}px) {
      width: 100%;
      padding: 16px;
    }

    @media (max-width: 480px) {
      padding-top: 12px;
      width: 100%;
      height: 655px;
    }
  `}
`

export const Header = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .greeting {
    font-size: 25px;
    font-weight: 600;
    line-height: 30.26px;
    margin: 0;
  }

  .date {
    font-size: 13px;
    font-weight: 400;
    line-height: 15.73px;
    margin: 0;
    @media (max-width: 480px) {
      margin-top: 24px;
    }
  }

  @media (max-width: 480px) {
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    margin-top: 24px;
  }
`

export const Text = styled(Typography)`
  font-family: Inter;
  margin: 0;
`

export const BalanceContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 90px;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    padding-right: 16px;
  }

  @media (max-width: 480px) {
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`

export const Balance = styled('div')`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .balance-title {
    font-size: 20px;
    font-weight: 600;
    line-height: 24.2px;
    margin: 0;
  }

  .account-type {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
    margin: 0;
  }

  .balance-amount {
    font-size: 31px;
    font-weight: 400;
    line-height: 37.52px;
    margin: 0;
  }

  @media (max-width: ${theme.breakpoints.values.md}px) {
    padding-right: 56px;
  }

  @media (max-width: 480px) {
    text-align: left;
    align-items: flex-start;
    gap: 8px;
    padding-right: 0;
  }
`

export const BalanceHeader = styled('div')`
  display: flex;
  align-items: center;
`

export const VisibilityIconWrapper = styled('span')<{ isVisible: boolean }>`
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  margin-left: 8px;
  cursor: pointer;

  svg {
    color: ${({ isVisible }) => (isVisible ? '#FFFFFF' : '#FF5031')};
  }
`

export const BalanceLine = styled(Divider)<{ isVisible: boolean }>`
  width: 180px;
  border: 2px solid ${({ isVisible }) => (isVisible ? '#FFFFFF' : '#FF5031')};
  margin: 10px 0;
`

export const BottomEdge = styled('img')`
  display: none;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    max-width: 180px;
    max-height: 177.51px;
    opacity: 0.3;
  }

  @media (max-width: 480px) {
    left: auto;
    right: 0;
    width: 100%;
    height: auto;
    max-width: 150px;
    max-height: 150px;
  }
`

export const TopEdge = styled('img')`
  display: none;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: auto;
    max-width: 180px;
    max-height: 177.47px;
    opacity: 0.3;
    transform: rotate(180deg);
  }

  @media (max-width: 480px) {
    right: auto;
    left: 0;
    width: 100%;
    height: auto;
    max-width: 150px;
    max-height: 150px;
    transform: rotate(0deg);
  }
`

export const PersonWithCoin = styled('img')`
  display: none;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    max-width: 283px;
    max-height: 228.17px;
    padding-bottom: 24px;
    padding-left: 32px;
  }

  @media (max-width: 480px) {
    left: auto;
    right: 0;
    width: 100%;
    height: auto;
    padding-bottom: 36px;
    padding-right: 32px;
  }
`
