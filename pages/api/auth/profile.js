import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from "axios";
// import bcrypt from 'bcrypt';

const profile = async (req, res) => {

    const dataBody = req.body

    if (req.method === 'GET') {
        const cookies = req.headers.cookie;
        await axios.get(process.env.NEXT_PUBLIC_API_URL + '/auth/profile',
            {
                headers: {'Content-Type': 'application/json', 'Cookie': cookies,},
                withCredentials: true
            }
        )
            .then(function (response) {
                    res.status(200).json({
                        message: 'Logged in',
                        user: '',
                        token: '',
                        errorMessage: ''
                    })
                }
            ).catch(function (error) {
                console.log('profile error: ', error);
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
                res.status(error.response.status).json({
                    message: error.message,
                    user: null,
                    token: null,
                    errorMessage: error.response.data.message,
                })
            });
    }
};
export default profile;