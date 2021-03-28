import React, { ReactNode } from 'react'
import PageContainer from '../components/PageContainer'
import SideBar from '../components/SideBar'

type SiteLayoutProps = {
  title?: string
}

//Extends the SiteLayout component to allow extra properties
type SiteLayoutInterface<P> = React.FC<P> & {
  getLayout: typeof getLayout
}

const SiteLayout: SiteLayoutInterface<SiteLayoutProps> = ({ children, title = 'This is the default title' }) => {
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <SideBar />
      <PageContainer title={title}>{children}</PageContainer>
    </div>
  )
}

// TODO figure out better way to create Title
export const getLayout = (title: string) => (page: ReactNode) => <SiteLayout title={title}>{page}</SiteLayout>

SiteLayout.getLayout = getLayout

export default SiteLayout
