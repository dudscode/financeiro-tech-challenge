'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../styles/theme'
import CssBaseline from '@mui/material/CssBaseline'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import store from '@/redux/store'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <Provider store={store}>{children}</Provider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
