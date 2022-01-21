import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Footer = () => (
  <div>
     <footer>
      <hr />
      <span>I'm here to stay Footer</span>
    </footer>
  </div>
)

export default Footer
