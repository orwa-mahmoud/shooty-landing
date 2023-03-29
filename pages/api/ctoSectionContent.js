import axios from "axios";

const ctoSectionContent = async (req, res) => {

    if (req.method === 'GET') {
        // await axios.get(process.env.NEXT_PUBLIC_API_URL + '/ctoSectionContent',
        //     {
        //         headers: {'Content-Type': 'application/json'},
        //         withCredentials: true
        //     }
        // )
        // .then(function (response) {
        //         res.status(200).json({
        //             ctoSectionContent:[]
        //         })
        //     }
        // ).catch(function (error) {
        //     console.log('profile error: ', error);
        //     res.status(error.response.status).json({
        //         ctoSectionContent:[]
        //     })
        // });
        res.status(200).json({
            mainCtoSectionContent:{
                'headLine'       : 'Start 3 month trial for free today',
                'body'           : 'We are here, book a call with our customer success manager.',
                'signupForFree'  : 'Signup for free'
            },
           ctoSectionContent:[
            'End-to-end workflow solution',
            'End-to-end workflow solution',
            'End-to-end workflow solution',
            'End-to-end workflow solution',
            'End-to-end workflow solution',
           ]
        })
    }
};
export default ctoSectionContent;