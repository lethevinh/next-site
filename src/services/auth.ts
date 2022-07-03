import client from './client'

interface LoginPayload {
  username: string
  password: string
}

export const login = async ({ username, password }: LoginPayload) => {
  const response = await client.post('login', {
    username,
    password,
  })
  return response
}

export const logout = async () => {
  const response = await client.post('logout')
  return response
}

export const getProfile = async () => {
  const response = await client.get('profile')
  return response
}
