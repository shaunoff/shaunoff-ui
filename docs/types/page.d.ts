import { NextPage } from 'next'
import { ComponentType, ReactElement, ReactNode } from 'react'

export type Page<P = {}> = Nextpage<P> & {
  getLayout?: (page: ReactElement) => ReactElement
  layout?: ComponentType
}
