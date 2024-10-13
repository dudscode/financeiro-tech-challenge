import { styled, css } from '@mui/material/styles'
import { Button, TextField } from '@mui/material'

export const Container = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    height: 527px;
    background-color: ${theme.palette.secondary.main};
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 24px;
    position: relative;
    overflow: hidden;
    gap: 16px;

    @media (max-width: ${theme.breakpoints.values.md}px) {
      padding: 16px;
      height: auto;
    }

    @media (max-width: 480px) {
      padding: 12px;
      height: auto;
    }
  `}
`

export const Header = styled('div')`
  margin-bottom: 20px;
  text-align: center;
  z-index: 2;

  @media (max-width: 480px) {
    margin-bottom: 24px;
    order: -1;
  }
`

export const Content = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: flex-start;

    @media (max-width: ${theme.breakpoints.values.md}px) {
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
  `}
`

export const FormContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  z-index: 2;

  @media (max-width: 480px) {
    gap: 12px;
  }
`

export const FormField = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 16px;

    .label {
      font-family: Inter, sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 19.36px;
      text-align: left;
    }

    .MuiTextField-root {
      background-color: #e6e6e6;
      border-radius: 8px;
      border: 1px solid ${theme.palette.secondary.dark};
      opacity: 1;
      margin: 0;
      padding: 0;

      &.editable {
        background-color: ${theme.palette.primary.contrastText};
      }

      .MuiInputBase-root {
        font-family: Inter, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        text-align: left;
        margin: 0;
        padding: 0 8px;
        display: flex;
        align-items: center;
      }

      .MuiOutlinedInput-notchedOutline {
        border: none;
      }

      .MuiInputAdornment-root {
        display: flex;
        align-items: center;
      }
    }

    @media (max-width: ${theme.breakpoints.values.md}px) {
      width: 100%;
    }
  `}
`

export const ProfileImage = styled('img')`
  ${({ theme }) => css`
    width: 50%;
    height: auto;
    z-index: 3;
    align-self: center;

    @media (max-width: ${theme.breakpoints.values.md}px) {
      width: 100%;
      order: 1;
      padding-top: 24px;
    }

    @media (max-width: 480px) {
      width: 100%;
      order: 1;
      padding-top: 24px;
    }

    @media (min-width: 481px) and (max-width: ${theme.breakpoints.values.md}px) {
      width: 439px;
      height: 375px;
    }
  `}
`

export const BottomEdge = styled('img')`
  position: absolute;
  bottom: 0;
  left: 0;
  pointer-events: none;
  width: 259.91px;
  height: 256.25px;

  @media (max-width: 480px) {
    width: 146px;
    height: 143.94px;
    left: -1;
    left: auto;
    right: 0;
  }
`

export const TopEdge = styled('img')`
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;
  width: 259.91px;
  height: 256.25px;

  @media (max-width: 480px) {
    width: 146px;
    height: 143.94px;
    left: 0;
  }
`

export const StyledButton = styled(Button)`
  ${({ theme }) => css`
    width: 250px;
    height: 48px;
    gap: 0px;
    border-radius: 8px;
    border: 2px solid transparent;
    background-color: ${theme.palette.error.main};
    opacity: 1;

    &:hover {
      background-color: ${theme.palette.error.dark};
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  `}
`

export const NameEmailInput = styled(TextField)`
  ${({ theme }) => css`
    width: 100%;
    height: 48px;
    gap: 0px;
    border-radius: 8px;
    border: 1px solid ${theme.palette.secondary.dark};
    opacity: 1;
    margin: 0;
    padding: 0;

    &.editable {
      background-color: ${theme.palette.primary.contrastText};
    }

    .MuiOutlinedInput-notchedOutline {
      border: none;
    }

    .MuiInputBase-root {
      display: flex;
      align-items: center;
    }

    .MuiInputAdornment-root {
      display: flex;
      align-items: center;
    }
  `}
`

export const PasswordInput = styled(TextField)`
  ${({ theme }) => css`
    width: 250px;
    height: 48px;
    gap: 0px;
    border-radius: 8px;
    border: 1px solid ${theme.palette.secondary.dark};
    opacity: 1;
    margin: 0;
    padding: 0;

    &.editable {
      background-color: ${theme.palette.primary.contrastText};
    }

    .MuiOutlinedInput-notchedOutline {
      border: none;
    }

    .MuiInputBase-root {
      display: flex;
      align-items: center.;
    }

    .MuiInputAdornment-root {
      display: flex;
      align-items: center.;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  `}
`
