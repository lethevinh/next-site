import { Post } from '@interfaces'
import { MainLayout } from '@layouts'
import { postService } from '@services'
import { GetStaticPaths } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

export interface PostDetailParams {
  postId: string
}

export interface PostDetailProps {
  post: Post
}

function PostDetail({ post }: PostDetailProps) {
  const router = useRouter()
  if (router.isFallback) {
    return <div style={{ fontSize: '2rem', textAlign: 'center' }}>Loading...</div>
  }
  return (
    <div style={{ fontSize: '2rem', textAlign: 'center' }}>
      <h1>Post Detail</h1>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{post.author}</p>
      <Image src={post.imageUrl} alt={post.title} width="100px" height="100px" />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // get posts
  const response = await postService.getPosts({ page: '1', limit: '10' })
  // get paths
  const paths = response.data.map((post: Post) => ({
    params: {
      postId: post.id,
    },
  }))
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }: { params: PostDetailParams }) => {
  let { postId } = params
  const post = await postService.getPost(postId)
  return {
    props: {
      post,
      revalidate: 300,
    },
  }
}

PostDetail.Layout = MainLayout

export default PostDetail
