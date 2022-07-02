import { MainLayout } from '@layouts'
import * as React from 'react'

export interface PostPageProps {}

function PostPage(props: PostPageProps) {
  return (
    <div>
      <h1>Post Page</h1>
    </div>
  )
}

PostPage.Layout = MainLayout

export default PostPage
