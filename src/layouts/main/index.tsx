import { LayoutProps } from '@interfaces'
import Footer from './footer'
import Header from './header'

export function MainLayout({ children }: LayoutProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, flexGrow: 1 }}>{children}</main>
      <Footer />
    </div>
  )
}
