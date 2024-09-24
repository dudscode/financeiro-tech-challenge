import { styled, css } from '@mui/material/styles'
import { Typography } from '@mui/material'



export const Container = styled('div')`
  height: 478px;
  padding: 24px;
  background-color: #CBCBCB;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
  position: relative;
  color: #DEE9EA;

`

export const Header = styled('div')`
  margin-bottom: 20px;
`

export const FormContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  width: 50%;
  z-index: 2;
`

export const FormField = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;

  .MuiSelect-root, .MuiTextField-root {
    background-color: #f5f5f5;
    border-radius: 4px;
    color: #333;
    width: 75%;
  }

  .mui-ld7slv-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root{
    background-color: #f5f5f5;
  }

`


export const BottomEdge = styled('img')`
  position: absolute;
  bottom: 0;
  left: 0;
  pointer-events: none;


`


export const TopEdge = styled('img')`
  position: absolute;
  top: 0;
  right: 0;
  pointer-events: none;

`

export const MenuItem = styled('div')`
    background-color: #f5f5f5;

`
export const PersonCard = styled('img')`
    position: absolute;
    bottom: 0;
    right: 0;
    pointer-events: none;

`


