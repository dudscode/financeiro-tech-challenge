import { styled } from '@mui/material/styles'
import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from '../styles/theme'
import '../styles/storybook.css'

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
      <Container>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Story />
          </div>
        </ThemeProvider>
      </Container>
    )
  ]
}

export default preview

const Container = styled('div')`
  width: 100%;
  #storybook-root {
    width: 100%;
  }
`
