import React from 'react'
import Login from '@/components/modals/Login'
import Signup from '@/components/modals/Signup'
import ForgotPassword from '@/components/modals/ForgotPassword'
import VirifyEmail from '@/components/modals/VirifyEmail'
import ResetPasswordLink from './ResetPasswordLink'
function Modals() {
  return (
    <>
      <Login/>
      <Signup/>
      <ForgotPassword/>
      <VirifyEmail/>
      <ResetPasswordLink/>
    </>
  )
}

export default Modals