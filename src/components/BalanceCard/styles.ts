import { styled } from '@mui/material/styles'
import { Typography, Divider } from '@mui/material'

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

export const Text = styled(Typography)`
  font-family: Inter;
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

export const BalanceLine = styled(Divider)`
  width: 180px;
  border: 2px solid #ff5031;
  margin: 10px 0;
`
