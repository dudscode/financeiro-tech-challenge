import { styled, css } from '@mui/material/styles'
import { Typography } from '@mui/material'
import Hr from '@mui/material/Divider'
import { Theme } from '@mui/material/styles/createThemeNoVars'

export interface IParagraph {
  /**
   * text size
   */
  txt?: string
  /**
   * margin bottom
   */
  md?: string
  /**
   * font weight
   */
  weight?: string
  /**
   * text type
   */
  type?: string
}

export const Container = styled('section')`
  ${({ theme }) => css`
    width: 100%;
    padding: 32px 24px;
    border-radius: 8px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 2 100%;
    overflow-y: auto;
    max-height: 80vh;
    min-width: 310px;
    @media (min-width: ${theme.breakpoints.values.sm}${theme.breakpoints.unit}) {
      align-items: center;
      max-height: calc(100vh - 140px);
      position: relative;
    }
    @media (min-width: ${theme.breakpoints.values.lg}${theme.breakpoints.unit}) {
      max-width: 280px;
    }
  `}
`

export const List = styled('ul')`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Item = styled('li')``

export const Title = styled(Typography)``

export const TextHighlight = styled('p')`
  ${({ theme }) => css`
    color: ${theme.palette.secondary.dark};
    font-weight: 600;
    margin-bottom: 8px;
  `}
`

export const TextContainer = styled('div')`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`

type Types = {
  [key: string]: (theme: Theme) => string
}

const types: Types = {
  default: theme => theme.palette.text.primary,
  info: theme => theme.palette.text.disabled
}

export const Paragraph = styled('p')<IParagraph>`
  ${({ theme, txt = '12px', md = 0, weight = 400, type = 'default' }) => css`
    color: ${types[type](theme)};
    font-size: ${txt};
    font-weight: ${weight};
    margin-bottom: ${md};
  `}
`

export const TextModal = styled('p')`
  font-size: 18px;
  margin-bottom: 8px;
`

export const Divider = styled(Hr)`
  ${({ theme }) => css`
    width: 70%;
    margin-top: 8px;
    border-color: ${theme.palette.secondary.dark};
  `}
`

export const ButtonContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`
export const PaginationContainer = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    gap: 24px;
    @media (min-width: ${theme.breakpoints.values.sm}${theme.breakpoints.unit}) {
      position: relative;
      bottom: initial;
    }
    @media (min-width: ${theme.breakpoints.values.lg}${theme.breakpoints.unit}) {
      position: absolute;
      bottom: 20px;
    }
  `}
`

export const PaginationButton = styled('button')`
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`

export const PageIndicator = styled('div')`
  font-size: 16px;
  font-weight: bold;
`

export const FilterListIcon = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`

export const SearchInput = styled('input')`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 6px;
  flex-grow: 1;
  margin-bottom: 0;
`

export const Select = styled('select')`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const IconWrapper = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
`
export const MenuWrapper = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(100%);
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    width: 90%;
  }
`

export const FilterSelect = styled('select')`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`
export const Filters = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  margin-top: 25px;
`

export const FilterHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const FilterTitle = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
`

export const CloseButton = styled('button')`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.text.primary};

  &:hover {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
`

export const FilterActions = styled('div')`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 16px;
`

export const ConfirmButton = styled('button')`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`
