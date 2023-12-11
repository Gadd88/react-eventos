import React from 'react'
import { Outlet } from 'react-router-dom'

const ProfileView = () => {
  return (
    <>
        <div>ProfileView</div>
        <Outlet />
    </>
  )
}

export default ProfileView