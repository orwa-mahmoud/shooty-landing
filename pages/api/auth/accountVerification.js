import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
// import bcrypt from 'bcrypt';

const accountVerification  = async (req, res)  => {
    
  const dataBody = req.body
  if (req.method === 'POST') {
       await axios.post(process.env.NEXT_PUBLIC_API_URL+'/auth/account-verification',
          dataBody,
          {
              headers: {
                  'Content-Type': 'application/json',
              },
              withCredentials: true
          }
          )
          .then(function (response) {
              res.status(200).json({
                  success:true,
                  message: response.data.message,
                  authCookie:response.headers["set-cookie"]
               })
          }
          ).catch(function (error) {
              console.log('error :',error)
              res.status(200).json({
                  success:false,
                  message: error.response.data.message,
               })
            });
  }        
};
export default accountVerification;