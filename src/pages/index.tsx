import { PageWithLayout } from '@interfaces'
import { MainLayout } from '../layouts'

const App: PageWithLayout = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Wellcome to Next Site</h1>
    </div>
  )
}

App.Layout = MainLayout

export default App
