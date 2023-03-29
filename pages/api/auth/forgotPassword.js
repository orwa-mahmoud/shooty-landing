import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
// import bcrypt from 'bcrypt';

const resetPassword  = async (req, res)  => {
    
    const dataBody = req.body
   
    if (req.method === 'POST') {
         await axios.post(process.env.NEXT_PUBLIC_API_URL+'/auth/reset-password',
                dataBody,
                {
                  headers: {'Content-Type': 'application/json'}, 
                  withCredentials : true,
                }
            )
            .then(function (response) {
                res.status(200).json({
                    message: response.data.message,
                 })
            }
            ).catch(function (error) {
                res.status(200).json({
                    message: error,
                 })
              });
    }        
};
export default resetPassword;