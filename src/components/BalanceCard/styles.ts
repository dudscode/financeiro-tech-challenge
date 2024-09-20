import { styled, css } from '@mui/material/styles'

export const Container = styled('div')`
  width: 690px;
  height: 402px;
  background: #004d61;
  border-radius: 8px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  color: #ffffff;
`

export const Header = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Greeting = styled('h2')`
  font-family: Inter;
  font-size: 25px;
  font-weight: 600;
  line-height: 30.26px;
  margin: 0;
`

export const Date = styled('p')`
  font-family: Inter;
  font-size: 13px;
  font-weight: 400;
  line-height: 15.73px;
  margin: 0;
`

export const BalanceContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 90px;
`

export const Balance = styled('div')`
  text-align: left;
`

export const BalanceHeader = styled('div')`
  display: flex;
  align-items: center;
`

export const BalanceTitle = styled('h3')`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24.2px;
  margin: 0;
`

export const VisibilityIcon = styled('span')<{ isVisible: boolean }>`
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  margin-left: 8px;
  cursor: pointer;

  svg {
    color: ${({ isVisible }) => (isVisible ? '#FFFFFF' : '#FF5031')};
  }
`

export const BalanceLine = styled('hr')`
  width: 180px;
  border: 2px solid #ff5031;
  margin: 10px 0;
`

export const AccountType = styled('p')`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  margin: 0;
`

export const BalanceAmount = styled('h1')`
  font-family: Inter;
  font-size: 31px;
  font-weight: 400;
  line-height: 37.52px;
  margin: 0;
`
