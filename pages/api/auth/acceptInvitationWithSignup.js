import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
// import bcrypt from 'bcrypt';

const acceptInvitationWithSignup  = async (req, res)  => {
    
    const dataBody  = req.body.data
    const workspace = parseInt(req.body.workspace);
    const token     = req.body.token
    console.log('dataBody',dataBody)
    console.log('workspace',workspace)
    console.log('token',token)
    if (req.method === 'POST') {
        
         await axios.post(process.env.NEXT_PUBLIC_API_URL+`/auth/accept-invitation-with-create-account/${workspace}/${token}`,
                dataBody,
                {
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    withCredentials : true

                }
            )
            .then(function (response) {
                res.status(200).json({
                    message: 'Logged in',
                    user: response.data.user,
                    token: response.data.token,
                    errorMessage:'',
                    authCookie:response.headers["set-cookie"]
                 })
            }
            ).catch(function (error) {
                console.log('signup error :',error);
                res.status(error.response.status).json({
                    message: error.message,
                    user:null,
                    token: null,
                    errorMessage: error.response?.data?.message,
                 })
              });
    }        
};
export default acceptInvitationWithSignup;