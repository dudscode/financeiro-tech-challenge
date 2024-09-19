'use client'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#004D61'
    },
    secondary: {
      main: '#47A138'
    },
    divider: 'rgba(71, 161, 56, 0.5)'
  },
  typography: {
    h2: {
      fontSize: '2rem',
      fontWeight: 700
    }
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    },
    unit: 'px'
  }
})

export default theme
