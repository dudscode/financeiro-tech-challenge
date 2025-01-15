'use client'

import type { AppProps } from 'next/app'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../styles/theme'
import CssBaseline from '@mui/material/CssBaseline'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ToastContainer />
        <Provider store={store} stabilityCheck='never'>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
