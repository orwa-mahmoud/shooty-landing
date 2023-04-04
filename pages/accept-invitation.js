import React,{useEffect} from 'react'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Cookies from "js-cookie";
import axios from "axios";
import allActions from '../store/actions';



function AcceptInvitation() {
  
  const dispatch =useDispatch()
  const router = useRouter();
  const { token,workspace } = router.query;

  // const workspace = 2
  // const token =  "$2b$10$JNUlQHq5XMn7VugA/CE0hOELYBDh3HB.ArJjnXKGJIWyhmRibQ/HG"

  const accountVerification = async () => {
      await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/get-invitation-details/${workspace}/${token}`, 
       {
           headers: {'Content-Type': 'application/json'},
           withCredentials: true
       }
      ).then(async function (response) {

          console.log('response.data :',response.data);
          const acceptInvitationData = {
            user:response.data,
            workspace:workspace,
            token:token
          }
          // console.log('acceptInvitationData :',acceptInvitationData.user.registered
          // );

          const res = response.data;
          dispatch(allActions.authActions.setAcceptInvitationData(acceptInvitationData))
          if(!response.data.registered){
            //dispatch(allActions.authActions.setAcceptInvitationData(response.data))
          }
          if(res.success){
            //window.location.href = process.env.NEXT_PUBLIC_SAAS_APP_URL+'?emailVerified=true';
          }else{
            //window.location.href = '/'
          }

      }).catch(function (error) {
        console.log('error : ',error)
      })

    }

  if(token && workspace){
    console.log('workspace :',workspace)
    accountVerification()
    //window.location.href = '/'
    router.push('/');
  }

  return (
    null
  )
}

export default AcceptInvitation