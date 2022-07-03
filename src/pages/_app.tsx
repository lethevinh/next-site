import { AppPropsWithLayout } from '@interfaces'
import { EmptyLayout } from '@layouts'
import '../styles/globals.scss'
import { SWRConfig } from 'swr'
import client from 'services/client-api'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || EmptyLayout

  return (
    <SWRConfig value={{ fetcher: (url) => client.get(url), shouldRetryOnError: false }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  )
}

export default MyApp
