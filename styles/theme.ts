'use client'
import '../styles/globals.css'
import '../styles/font.css'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    common: { black: '#000', white: '#fff' },
    background: {
      paper: 'background-image: linear-gradient(#004D61, #fff)',
      default: '#E4EDE3'
    },
    primary: {
      light: '#E4EDE3',
      main: '#004D61',
      dark: '#004D61',
      contrastText: '#fff'
    },
    secondary: {
      light: '#F8F8F8',
      main: '#CBCBCB',
      dark: '#47A138',
      contrastText: '#000'
    },
    error: {
      light: '#e57373',
      main: '#FF5031',
      dark: '#CB0000',
      contrastText: '#fff'
    },
    text: {
      primary: '#000',
      secondary: '#47A138',
      disabled: '#9d9d9d'
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
