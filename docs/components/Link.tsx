import React, { ReactElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface CustomLinkProps {
  href: string
  children: ReactElement
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  const router = useRouter()

  const active = router.pathname === href ? 'true' : undefined

  return (
    <Link href={href} passHref>
      {React.cloneElement(children, { active })}
    </Link>
  )
}

export default CustomLink
