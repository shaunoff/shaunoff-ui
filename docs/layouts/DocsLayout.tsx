import React, { ReactNode } from 'react'
import { getLayout as getSiteLayout } from './SiteLayout'
import Link from '../components/Link'
import { Test, Button, NavMenu, NavMenuItem } from '@shaunoff-ui/components'
// type DocsLayoutProps = {
//   children?: ReactNode
// }

// //Extends the SiteLayout component to allow extra properties
// type DocsLayoutInterface<P> = React.FunctionComponent<P> & {
//   getLayout: typeof getLayout
// }

const DocsLayout: React.FC = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <NavMenu>
        <Link href="/">
          <NavMenuItem label="Home" />
        </Link>
        <Link href="/about">
          <NavMenuItem label="About" />
        </Link>
      </NavMenu>
      <div>{children}</div>
    </div>
  )
}
export const getLayout: React.FC = (page) => getSiteLayout('title')(<DocsLayout>{page}</DocsLayout>)
export default DocsLayout
