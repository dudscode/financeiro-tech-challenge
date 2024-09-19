import { styled, css } from '@mui/material/styles'

type LinkProps = {
  color: string
  weight: string
  isHorizontal?: boolean
  isSelected?: boolean
}

type ItemsProps = {
  color: string
  isHorizontal?: boolean
  isSelected?: boolean
}

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
  ${({ color, isHorizontal, isSelected }) => css`
    & + li {
      border-top: 1px solid ${color};
    }
    ${isHorizontal &&
    css`
      ${isSelected &&
      css`
        border-bottom: 1px solid ${color};
      `}
      & + li {
        border-top: 0;
      }
    `}
  `}
`

export const Link = styled('a')<LinkProps>`
  ${({ color, weight, isHorizontal, isSelected }) => css`
    color: ${color};
    font-weight: ${weight};
    font-size: 18px;
    padding: 16px 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    &:hover {
      background: #e4ede3;
    }
    ${isHorizontal &&
    css`
      width: 138px;
      &:hover {
        background: transparent;
        ${!isSelected &&
        css`
          padding-bottom: 15px;
          border-bottom: 1px solid #000;
        `}
      }
    `}
  `}
`
