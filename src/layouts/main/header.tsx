import { useAuth } from '@hooks'
import Link from 'next/link'

export default function Header() {
  let { profile, logout } = useAuth()

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
        {profile ? (
          <>
            <li>
              <Link href="/profile">{profile.username}</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
      </ul>
    </header>
  )
}
