import { styled } from '@mui/material/styles'

export const GreyCardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#CBCBCB',
  justifyContent: 'start',
  padding: 2,
  position: 'relative',
  minHeight: '250px',
  overflow: 'hidden',
  color: '#000',
  borderRadius: 8
}))

export const TopRightImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 2,
  width: '6em',
  [theme.breakpoints.up('sm')]: {
    width: '10em',
    right: 0,
    left: 'unset'
  },
  [theme.breakpoints.up('md')]: {
    width: '8em'
  }
}))

export const BottomLeftImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  transform: 'rotate(180deg)',
  bottom: 0,
  right: 0,
  zIndex: 2,
  width: '6em',
  [theme.breakpoints.up('sm')]: {
    width: '10em',
    left: 0,
    right: 'unset'
  },
  [theme.breakpoints.up('md')]: {
    width: '8em'
  }
}))
