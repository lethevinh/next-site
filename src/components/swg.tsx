import { LayoutProps } from '@interfaces'
import * as React from 'react'
import { SWRConfig } from 'swr'
import client from 'services/client-api'

export function SWR({ children }: LayoutProps) {
  const onError = (error: any, key: string) => {
    if (error.status !== 403 && error.status !== 404) {
      // We can send the error to Sentry,
      // or show a notification UI.
      console.warn(error.message)
    }
  }

  const defaultFecher = (url: string) => client.get(url)

  const value = {
    fetcher: defaultFecher,
    shouldRetryOnError: false,
    onError,
  }

  return <SWRConfig value={value}>{children}</SWRConfig>
}
