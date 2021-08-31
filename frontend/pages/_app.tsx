import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import 'styles/tailwind.css'
import 'react-toastify/dist/ReactToastify.css'
import { ReactElement } from 'react'
import { AnimatePresence } from 'framer-motion'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }): Promise<{
    pageProps: Record<string, unknown>
  }> {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render(): ReactElement {
    const { Component, pageProps, router } = this.props
    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    )
  }
}

export default MyApp
