import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Content = () => (
  <div>
      <h1>This is Content Page</h1>
  </div>
)

export default Content
