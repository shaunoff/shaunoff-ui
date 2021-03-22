import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { Test, Button } from '@shaunoff/ui'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Test testProp="ghjgh" />
    <Button>hfdjhkfjf</Button>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage