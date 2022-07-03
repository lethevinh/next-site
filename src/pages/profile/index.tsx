import { MainLayout } from '@layouts'
import * as React from 'react'
import { Auth } from '@components'
import { useAuth } from '@hooks'
import SEO from '@components/seo'

function Profile() {
  const { profile } = useAuth()
  const loading = <div style={{ fontSize: '2rem', textAlign: 'center' }}>Loading...</div>
  return (
    <Auth>
      {!profile?.username ? (
        loading
      ) : (
        <>
          <SEO
            data={{
              title: profile.username,
              description: profile.username,
              url: `https://next-site-brown-delta.vercel.app/profile`,
              thumbnailUrl:
                'https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png',
            }}
          />
          <div>Profile</div>
          <h1>Username : {profile.username}</h1>
          <h1>Email : {profile.email}</h1>
        </>
      )}
    </Auth>
  )
}

Profile.Layout = MainLayout

export default Profile
