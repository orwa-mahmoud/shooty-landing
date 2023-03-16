import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from "axios";

axios.defaults.withCredentials = true;
const login = async (req, res) => {

    const dataBody = req.body
    console.log('res.data : ', dataBody);
    if (req.method === 'POST') {

        await axios.post(process.env.NEXT_PUBLIC_API_URL + '/auth/login',
            dataBody,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*',
                    // 'Access-Control-Allow-Credentials': true,
                },
                withCredentials: true
            }
        )
            .then(function (response) {
                    res.status(200).json({
                        message: 'Logged in',
                        user: response.data.user,
                        token: response.data.token,
                        errorMessage: '',
                        authCookie:response.headers["set-cookie"]
                    })
                }
            ).catch(function (error) {

                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx

                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js

                } else {
                    // Something happened in setting up the request that triggered an Error
                    ;
                }

                res.status(error.response.status).json({
                    message: error.message,
                    user: null,
                    token: null,
                    errorMessage: error.response.data.message,
                })
            });
    }
};
export default login;