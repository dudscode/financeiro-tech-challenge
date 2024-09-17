'use client'
import '../styles/globals.css'
import '../styles/font.css'
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
