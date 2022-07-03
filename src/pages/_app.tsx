import { SWR } from '@components'
import { AppPropsWithLayout } from '@interfaces'
import { EmptyLayout } from '@layouts'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || EmptyLayout

  return (
    <SWR>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWR>
  )
}

export default MyApp
