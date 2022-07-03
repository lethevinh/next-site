import { MILISECONDS_IN_HOUR } from '@constants'
import { PayloadLogin, User } from '@interfaces'
import { authService } from '@services'
import client from 'services/client'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/dist/types'

export function useAuth(options?: Partial<PublicConfiguration>) {
  const fetcher = async (url: string) => client.get<User>(url)
  const { data, error, mutate } = useSWR('/profile', fetcher, {
    dedupingInterval: MILISECONDS_IN_HOUR,
    revalidateOnFocus: false,
    ...options,
  })

  const firstLoading = data === undefined && error === undefined

  async function login(payload: PayloadLogin) {
    await authService.login(payload)

    await mutate()
  }

  async function logout() {
    await authService.logout()
    mutate(null, false)
  }

  let profile: User = data as User

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
    mutate,
  }
}
