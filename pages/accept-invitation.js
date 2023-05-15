import React,{useEffect,useCallback} from 'react'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Cookies from "js-cookie";
import axios from "axios";
import allActions from '../store/actions';



function AcceptInvitation() {
  
  const dispatch =useDispatch()
  const router = useRouter();
  const { token,workspace } = router.query;


    const getInvitationDetails = useCallback(async () => {
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
    }, [token,workspace,dispatch]);

  useEffect(() => {
    if(token && workspace){
      getInvitationDetails()
    }
    router.push('/');
  },[getInvitationDetails,token,workspace,router]);

  return (
    null
  )
}

export default AcceptInvitation