import { AppPropsWithLayout } from '@interfaces'
import { EmptyLayout } from '@layouts'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || EmptyLayout

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
