import * as React from 'react'
import AdminFooter from './footer'
import AdminHeader from './header'

export function App({ children }: LayoutProps) {
  return (
    <div>
      <AdminHeader />
      <div className="container">{children}</div>
      <AdminFooter />
    </div>
  )
}
