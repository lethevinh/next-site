import { MainLayout } from '@layouts'
import * as React from 'react'
import { Auth } from '@components'
import { useAuth } from '@hooks'

function Profile() {
  const { profile } = useAuth()
  const loading = <div style={{ fontSize: '2rem', textAlign: 'center' }}>Loading...</div>
  return (
    <Auth>
      {!profile?.username ? (
        loading
      ) : (
        <>
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
