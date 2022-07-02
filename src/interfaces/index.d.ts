import { AppProps } from 'next/app'
import { ReactElement } from 'react'

interface LayoutProps {
  children: ReactNode
}

type PageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement
}

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout
}
