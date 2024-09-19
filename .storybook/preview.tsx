import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from '../styles/theme'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story: any) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    )
  ]
}

export default preview
