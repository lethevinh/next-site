import Link from 'next/link'
import * as React from 'react'

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <header className="header">
      <ul style={{}}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>Login</li>
        <li>Logout</li>
      </ul>
    </header>
  )
}
