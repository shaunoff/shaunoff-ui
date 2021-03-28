import React from 'react'
import { useTheme } from '../theme/ThemeContext'
import clsx from 'clsx'
//import Icon from './Icon'
//import { Link, useResolvedPath, useLocation } from 'react-router-dom'
//import icons from './icons'

interface NavMenuItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  label?: string
  className?: string
  href?: string
  active?: boolean
  //icon?: keyof typeof icons
}

const NavMenuItem = React.forwardRef<HTMLAnchorElement, NavMenuItemProps>(function NavMenuItem(
  props: NavMenuItemProps,
  ref,
) {
  const { label, className, active /*icon*/, ...rest } = props
  const {
    theme: { navMenuItem },
  } = useTheme()

  //const active = isActive({ to, end })
  const navItemStyles = clsx(navMenuItem.base, active ? navMenuItem.active : navMenuItem.default, className)
  //const iconStyles = clsx(navMenuItem.icon.base, active ? navMenuItem.icon.active : navMenuItem.icon.default)
  return (
    <a ref={ref} {...rest} className={navItemStyles}>
      {/* {icon && <Icon icon={icon} className={iconStyles} />} */}
      {label}
    </a>
  )
})

export default NavMenuItem
