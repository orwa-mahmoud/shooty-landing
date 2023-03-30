import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
// import bcrypt from 'bcrypt';

const changePassword  = async (req, res)  => {
    
    const dataBody = req.body
//http://app.shooty.io:3002/reset-password?token=$2b$10$ENF.qQ2jfGQztYYVKAZ0deeW/wYiLFAK671nY0BSm78TLhXJkE7Uq&email=mustapha.shapesdefined@gmail.com
//    const dataBody = {
//         "email":"mustapha.shapesdefined@gmail.com",
//         "token":"$2b$10$ENF.qQ2jfGQztYYVKAZ0deeW/wYiLFAK671nY0BSm78TLhXJkE7Uq",
//         "password":"ms@19947913579135",
//         "repeatPassword":"ms@19947913579135"
//     }
    if (req.method === 'POST') {
         await axios.post(process.env.NEXT_PUBLIC_API_URL+'/auth/change-password',
                dataBody,
                {
                  headers: {'Content-Type': 'application/json'}, 
                  withCredentials : true,
                }
            )
            .then(function (response) {
                res.status(200).json({
                    success:true,
                    message: response.data.message,
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
export default changePassword;