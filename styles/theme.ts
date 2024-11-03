'use client'
import '../styles/font.css'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    common: { black: '#000', white: '#fff' },
    background: {
      paper: '#E4EDE3',
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

    text: {
      primary: '#000',
      secondary: '#47A138',
      disabled: '#9d9d9d'
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    },
    error: {
      light: '#e57373',
      main: '#FF5031',
      dark: '#BF1313',
      contrastText: '#fff'
    },
    warning: {
      main: '#FFC107',
      light: '#FFD54F',
      dark: '#FFA000',
      contrastText: '#000'
    },
    success: {
      main: '#47A138',
      light: '#81C784',
      dark: '#388E3C',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 16,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    h1: {
      fontSize: '6rem',
      fontWeight: 700
    },
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
          '--background': '#e4ede3',
          '--background-input': '#ffffff',
          '--foreground': '#000000',
          '--color-primary': '#004D61',
          '--color-primary-dark': '#003543',
          '--color-secondary': '#47A138',
          '--color-transaction-text': '#DEE9EA',
          '--border-radius': '8px',
          '--border': '1px solid var(--color-primary)',
          '--text-input-color': '#444444',
          '--max-width': '1320px'
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
        },
        '.MuiPieArc-root': {
          stroke: 'var(--color-primary) !important'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: 'var(--color-primary)',
            borderWidth: '1px'
          },
          '&:hover fieldset': {
            borderWidth: '2px',
            borderColor: 'var(--color-secondary) !Important'
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--background-input)',
          borderRadius: 'var(--border-radius) !important',
          color: 'var(--text-input-color) !important',
          '&:hover': {
            backgroundColor: 'var(--background-input)'
          }
        },
        input: {
          backgroundColor: 'var(--background-input)',
          borderRadius: 'var(--border-radius) !important',
          color: 'var(--text-input-color) !important',
          '&-input': {
            borderRadius: 'var(--border-radius) !important'
          },
          '&:hover': {
            backgroundColor: 'var(--background-input)'
          },
          '&[readonly]': {
            opacity: 0.7
          }
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--border-radius) !important',
          color: 'var(--text-input-color) !important'
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: 'var(--color-primary)',
          '&.Mui-disabled': {
            backgroundColor: 'var(--select-disabled-bg, #e0e0e0)',
            color: 'var(--select-disabled-color, rgba(0, 0, 0, 0.38))',
            borderRadius: 'var(--border-radius) !important'
          },
          '&.Mui-focused': {
            // color: '#3f51b5',
            // border: 'none'
          },
          '&.Mui-error': {
            color: '#f44336'
          },
          '&:hover': {
            backgroundColor: '#f5f5f5'
          }
        },
        icon: {
          color: 'var(--color-primary)'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          color: 'var(--text-input-color)',
          height: 'auto !important'
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: 'var(--background-input)',
          color: 'var(--text-input-color)'
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--background-input)',
          textAlign: 'center',
          display: 'flow-root',
          '&.Mui-selected': {
            backgroundColor: 'var(--color-primary)',
            color: '#fff',
            opacity: '0.60',
            '&:hover': {
              backgroundColor: '#003D51'
            }
          },
          '&:hover': {
            backgroundColor: 'var(--background)'
          }
        }
      }
    },
    MuiPopper: {
      styleOverrides: {
        root: {
          // backgroundColor: 'var(--background-input)',
          color: 'var(--text-input-color)',
          MuiChartsTooltip: {
            paper: {
              backgroundColor: 'var(--background-input) !important',
              color: 'var(--text-input-color)'
            }
          },
          styleOverrides: {
            paper: {
              backgroundColor: 'var(--background-input)',
              borderRadius: 'var(--border-radius) !important'
            },
            labelCell: {
              color: 'var(--color-primary) !important'
            },
            cell: {
              color: 'var(--color-primary)'
            },
            valueCell: {
              color: 'var(--text-input-color)'
            }
          }
        }
      }
    }
  }
})

export default theme
