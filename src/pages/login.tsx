import { useAuth } from '@hooks'
import { MainLayout } from '@layouts'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, showLoading] = useState(false)

  const { login } = useAuth({
    revalidateOnMount: false,
  })

  const handlerClickLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    try {
      showLoading(true)
      await login({ username, password })
      showLoading(false)
      // get redirect url from query string
      const redirect = (router?.query.redirect as string) || '/'
      router.push(redirect)
    } catch (error) {
      console.log('failed to login', error)
    }
  }

  const Form = (
    <form action="#">
      <div>
        <label htmlFor="email">Username</label>
        <input
          type="text"
          id="username"
          onChange={(event: any) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(event: any) => setPassword(event.target.value)}
        />
      </div>
      <button onClick={handlerClickLogin}>Login</button>
    </form>
  )

  return (
    <div>
      <h1>Login</h1>
      {loading ? <p>Loading...</p> : Form}
    </div>
  )
}
LoginPage.Layout = MainLayout

export default LoginPage
