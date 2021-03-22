import '../styles/tailwind.css'
import React from 'react'
import { theme } from '@shaunoff/ui'
import type { AppProps /*, AppContext */ } from 'next/app'
const { ThemeProvider } = theme
const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
