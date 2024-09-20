'use client'
import '../styles/globals.css'
import '../styles/font.css'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    common: { black: '#000', white: '#fff' },
    background: {
      paper: 'background-image: linear-gradient(rgba(0, 77, 97, 1), #fff)',
      default: 'rgba(228, 237, 227, 1)'
    },
    primary: {
      light: 'rgba(228, 237, 227, 1)',
      main: 'rgba(0, 77, 97, 1)',
      dark: 'rgba(0, 77, 97, 1)',
      contrastText: '#fff'
    },
    secondary: {
      light: 'rgba(248, 248, 248, 1)',
      main: 'rgba(203, 203, 203, 1)',
      dark: 'rgba(71, 161, 56, 1)',
      contrastText: 'rgba(0, 0, 0, 1)'
    },
    error: {
      light: '#e57373',
      main: 'rgba(255, 80, 49, 1)',
      dark: 'rgba(191, 19, 19, 1)',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(71, 161, 56, 1)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    }
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
      md: 1024,
      lg: 1280,
      xl: 1920
    },
    unit: 'px'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '--background': '#ffffff',
          '--foreground': '#171717'
        },
        '@media (prefers-color-scheme: dark)': {
          ':root': {
            '--background': '#e4ede3',
            '--foreground': '#000000'
          }
        },
        'html, body': {
          maxWidth: '100vw',
          overFlowX: 'hidden'
        },
        ['*']: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        },
        body: {
          WebkitFontSmoothing: 'antialiased', // Antialiasing.
          MozOsxFontSmoothing: 'grayscale', // Antialiasing.
          color: 'var(--foreground)',
          backgroundColor: 'var(--background)',
          fontFamily: 'Inter, sans-serif'
        },
        a: {
          color: 'inherit',
          textDecoration: 'none'
        },
        '@media (prefers-reduced-scheme: dark)': {
          html: {
            colorScheme: 'dark'
          }
        },
        'ol, ul': {
          listStyle: 'none'
        },
        button: {
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          outline: 'none',
          padding: 0,
          boxShadow: 'none'
        }
      }
    }
  }
})

export default theme
