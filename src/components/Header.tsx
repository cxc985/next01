'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const linkData = [
  { name: 'User', href: '/user' },
  { name: 'Product', href: '/product' },
  { name: 'About', href: '/about' }
]
export default function Header() {
  const pathname = usePathname()

  // const test = () => {
  //   console.log(pathname);
  // };
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between px-20 py-5 text-2xl">
        <Link
          href="/"
          className={pathname == '/' ? 'text-purple-500 font-bold' : ''}
        >
          Home
        </Link>
        <div className="space-x-5">
          {linkData.map(item => (
            <Link
              href={item.href}
              key={item.name}
              className={
                pathname == item.href ? 'text-purple-500 font-bold' : ''
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
