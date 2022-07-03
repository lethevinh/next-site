import { Post } from '@interfaces'
import client from './client-api'

interface PostsResponse {
  posts: Post[]
  pagination: any
}

export const getPosts = async ({ page = '1', limit = '10' }) => {
  const response = await client.get('/posts', {
    params: {
      _page: page,
      _limit: limit,
    },
  })
  return response
}

// get post function
export const getPost = async (id: string) => {
  const response = await client.get(`/posts/${id}`)
  return response
}
