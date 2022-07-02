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

interface Pagination {
  page: string
  limit: string
}

interface Post {
  id: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  imageUrl: string
  author: string
}
