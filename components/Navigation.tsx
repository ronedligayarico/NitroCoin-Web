import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Navigation = () => (
  <div>
      <nav>
          <h3>Navigation Bar</h3>
      </nav>
  </div>
)

export default Navigation
