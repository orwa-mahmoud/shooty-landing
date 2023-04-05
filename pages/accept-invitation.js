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

  const getInvitationDetails = async () => {
      await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/get-invitation-details/${workspace}/${token}`, 
       {
           headers: {'Content-Type': 'application/json'},
           withCredentials: true
       }
      ).then(async function (response) {

          const acceptInvitationData = {
            user:response.data,
            workspace:parseInt(workspace),
            token:token
          }
          // console.log('acceptInvitationData :',acceptInvitationData.user.registered
          // );

          const res = response.data;
          dispatch(allActions.authActions.setAcceptInvitationData(acceptInvitationData))

      }).catch(function (error) {
        console.log('error : ',error)
      })

    }

  useEffect(() => {
    if(token && workspace){
      getInvitationDetails()
    }
    router.push('/');
  },[token,workspace]);

  return (
    null
  )
}

export default AcceptInvitation