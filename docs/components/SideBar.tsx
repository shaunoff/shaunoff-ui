import React from 'react'
import { NavMenu, NavMenuItem } from '@shaunoff-ui/components'
import Link from '../components/Link'

const SideBar = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
          <NavMenu>
            <Link href="/">
              <NavMenuItem label="Home" />
            </Link>
            <Link href="/about">
              <NavMenuItem label="About" />
            </Link>
            <Link href="/components/Button">
              <NavMenuItem label="Button" />
            </Link>
          </NavMenu>
        </div>
      </div>
    </div>
  )
}

export default SideBar
