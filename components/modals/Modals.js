import React from 'react'
import Login from '@/components/Modals/Login'
import Signup from '@/components/modals/Signup'
import ForgotPassword from '@/components/modals/ForgotPassword'
import VirifyEmail from '@/components/modals/VirifyEmail'
function Modals() {
  return (
    <>
      <Login/>
      <Signup/>
      <ForgotPassword/>
      <VirifyEmail/>
    </>
  )
}

export default Modals