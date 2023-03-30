import React,{useEffect} from 'react'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import allActions from '../store/actions';

function ResetPassword() {
  
  const dispatch =useDispatch()

  const router = useRouter();
  const { email,token } = router.query;
  const changePasswordData = {
    email:email,
    token:token
  }
  if(token && email){
    console.log('changePasswordData :',changePasswordData)
    dispatch(allActions.authActions.setChangePasswordData(changePasswordData))
    router.push('/');
  }

  // useEffect(() => {
  //   if(token && email){
  //     console.log('changePasswordData :',changePasswordData)
  //     dispatch(allActions.authActions.setChangePasswordData(changePasswordData))
  //     router.push('/');
  //   }
  // },[email,token]);

  return (
    null
  )
}

export default ResetPassword