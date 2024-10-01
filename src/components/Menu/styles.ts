import { styled, css } from '@mui/material/styles'

type LinkProps = {
  isSelected?: boolean
}

type ItemsProps = {
  isSelected?: boolean
} & ListProps

type ListProps = {
  isHorizontal?: boolean
}

export const List = styled('ul')<ListProps>`
  ${({ isHorizontal }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-direction: column;
    ${isHorizontal &&
    css`
      flex-direction: row;
    `}
  `}
`

export const Item = styled('li')<ItemsProps>`
  ${({ theme, isSelected, isHorizontal }) => css`
    width: 100%;
    position: relative;

    &:after {
      content: '';
      width: 85%;
      height: 1px;
      background-color: ${isSelected ? theme.palette.secondary.dark : theme.palette.common.black};
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      ${isHorizontal &&
      !isSelected &&
      css`
        display: none;
      `}
    }
    &:last-of-type {
      &:after {
        display: none;
      }
    }
  `}
`

export const Link = styled('a')<LinkProps>`
  ${({ theme, isSelected }) => css`
    color: ${theme.palette.text.primary};
    font-weight: 400;
    ${isSelected &&
    css`
      color: ${theme.palette.text.secondary};
      font-weight: 700;
    `}
    font-size: 18px;
    padding: 16px 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
  `}
`
