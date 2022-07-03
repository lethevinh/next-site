import SEO from '@components/seo'
import { useLoading } from '@hooks'
import { Post } from '@interfaces'
import { MainLayout } from '@layouts'
import { postService } from '@services'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetServerSideProps, GetServerSidePropsContext } from 'next/types'

export interface PostPageProps {
  posts: Post[]
}

function PostPage({ posts }: PostPageProps) {
  const router = useRouter()
  const [loading] = useLoading()

  let page = router.query.page || '1'

  const handleNextPages = () => {
    const nexPage = Number(page) + 1
    router.push(`/posts?page=${nexPage}`)
  }

  const handlePreviousPage = () => {
    if (page === '1') return
    const prevPage = Number(page) - 1
    router.push(`/posts?page=${prevPage}`)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <SEO
        data={{
          title: 'Blog',
          description: 'Blog Page',
          url: 'https://next-site-brown-delta.vercel.app/posts',
          thumbnailUrl:
            'https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png',
        }}
      />
      <h1>Post Page</h1>
      {posts &&
        posts.map((post: Post) => (
          <div key={post.id} style={{ height: '50px' }}>
            <h2>
              <Link href={`/posts/${post.id}`} prefetch={false}>
                <a>{post.title}</a>
              </Link>
            </h2>
          </div>
        ))}
      <button onClick={handlePreviousPage}>Prev Page</button>
      <button onClick={handleNextPages}>Next Page</button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<PostPageProps> = async (
  context: GetServerSidePropsContext
) => {
  const page = (context?.query.page as string) || '1'
  const limit = (context?.query.limit as string) || '10'
  const response = await postService.getPosts({ page, limit })
  return {
    props: {
      posts: response.data,
    },
  }
}

PostPage.Layout = MainLayout

export default PostPage
