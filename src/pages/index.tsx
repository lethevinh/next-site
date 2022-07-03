import SEO from '@components/seo'
import { PageWithLayout } from '@interfaces'
import { MainLayout } from '../layouts'

const App: PageWithLayout = () => {
  return (
    <div>
      <SEO
        data={{
          title: 'Home',
          description: 'Home Page',
          url: 'https://next-site-brown-delta.vercel.app/',
          thumbnailUrl:
            'https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png',
        }}
      />
      <h1 className=" text-tahiti text-center">Wellcome to Next Site</h1>
    </div>
  )
}

App.Layout = MainLayout

export default App
