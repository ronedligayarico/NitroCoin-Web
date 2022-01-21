import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Nitro Coin' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navigation></Navigation>
    </header>
    {children}
    <Content></Content>
   <Footer></Footer>
  </div>
)

export default Layout
