import { styled, css } from '@mui/material/styles'

type ContainerProps = {
  bgColor?: string
  width?: string
  height?: string
  aligne: 'start' | 'center' | 'end'
  zIndex: number
}

type BackgroundProps = {
  zIndex: number
}

const getAligne = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end'
}

export const Container = styled('div')<ContainerProps>`
  ${({ bgColor = '#fff', width = 'auto', height = 'auto', aligne, zIndex }) => css`
    display: flex;
    justify-content: center;
    align-items: ${getAligne[aligne]};
    background-color: ${bgColor};
    height: auto;
    min-height: ${height};
    width: ${width};
    padding: 8px;
    position: relative;
    z-index: ${zIndex};
  `}
`

export const Close = styled('button')`
  position: absolute;
  top: 8px;
  right: 8px;
`

export const Content = styled('div')`
  width: 100%;
`

export const Background = styled('div')<BackgroundProps>`
  ${({ theme, zIndex }) => css`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.palette.common.black};
    opacity: 0.6;
    z-index: ${zIndex};
  `}
`
