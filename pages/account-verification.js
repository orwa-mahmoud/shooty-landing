import React,{useEffect} from 'react'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Cookies from "js-cookie";
import axios from "axios";

function AccountVerification() {
  
  const dispatch =useDispatch()

  const router = useRouter();
  const { token,email } = router.query;
  const accountVerificationData = {
    token:token,
    email:email,
  }
  // const data_ = {
  //   email:"mustaphatest.shapesdefined@gmail.com",
  //   token: "$2b$10$BiijnumhI7BI7qihHn2m7eYfsOIUz05UlU0LyPX/mpWU/U2VZLtK."
  // }
  const accountVerification = async (data) => {
   await axios.post("/api/auth/accountVerification", 
     data,
       {
           headers: {'Content-Type': 'application/json'},
           withCredentials: true
       }
   ).then(async function (response) {

     console.log(response.data);
       const res = response.data;
       const setCookieArray = res.authCookie;
       if (setCookieArray && setCookieArray.length > 0) {
           const cookieParts = setCookieArray[0].split(";").map((part) => part.trim());
           const cookieKeyValue = cookieParts[0].split("=");
           const cookieKey = cookieKeyValue[0];
           const cookieValue = cookieKeyValue[1];
           const domain = cookieParts.find((part) => part.startsWith("Domain=")).split("=")[1];
           const path = cookieParts.find((part) => part.startsWith("Path=")).split("=")[1];
           const sameSite = cookieParts.find((part) => part.startsWith("SameSite=")).split("=")[1];
           const expirationDateValue = cookieParts.find((part) => part.startsWith("Expires=")).split("=")[1];
           const expirationDate = new Date(Date.parse(expirationDateValue))
           Cookies.set(cookieKey, cookieValue, {
               domain: domain,
               path: path,
               expires: expirationDate,
           });
       }
       if(res.success){
        window.location.href = process.env.NEXT_PUBLIC_SAAS_APP_URL+'?emailVerified=true';
       }else{
        window.location.href = '/'
       }

   }).catch(function (error) {
    console.log('error : ',error)
   })

}

  if(token && email){
    console.log('accountVerificationData :',accountVerificationData)
    accountVerification(accountVerificationData)
   // router.push('/');
  }

  return (
    null
  )
}

export default AccountVerification