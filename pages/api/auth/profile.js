import axios from "axios";

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