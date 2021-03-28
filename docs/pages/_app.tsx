import '../styles/style.css'
import React from 'react'
import { theme } from '@shaunoff-ui/components'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import SiteLayout from '../layouts/SiteLayout'
import type { Page } from '../types/page'

const { ThemeProvider } = theme

type AppLayoutProps = AppProps & {
  Component: Page
}

const MyApp = ({ Component, pageProps }: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: NextPage) => <SiteLayout children={page} {...pageProps} />)

  return <ThemeProvider>{getLayout(<Component {...pageProps} />, pageProps)}</ThemeProvider>
}

export default MyApp
