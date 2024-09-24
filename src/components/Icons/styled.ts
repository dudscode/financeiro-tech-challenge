import { styled, css } from '@mui/material/styles'
export interface IContainerProps {
  /**
   * descrição do icone
   */
  width: string
  /**
   * descrição do icone
   */
  height: string
}

export const Container = styled('div')<IContainerProps>`
  ${({ width, height }) => css`
  position: relative;
  width: ${width};
  height: ${height};

  & img {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
  }
  `}
  `
  export const Image = styled('img')``
