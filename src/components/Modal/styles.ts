import { styled, css } from '@mui/material/styles'

type ContainerProps = {
  bgColor?: string
  width?: string
  height?: string
}

export const Container = styled('div')<ContainerProps>`
  ${({ bgColor = '#fff', width = 'auto', height = 'auto' }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${bgColor};
    height: ${width};
    width: ${height};
    padding: 8px;
    position: relative;
  `}
`

export const Close = styled('button')`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Content = styled('div')``
