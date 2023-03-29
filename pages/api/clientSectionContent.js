import axios from "axios";

const clientSectionContent = async (req, res) => {

    if (req.method === 'GET') {
        // await axios.get(process.env.NEXT_PUBLIC_API_URL + '/clientSectionContent',
        //     {
        //         headers: {'Content-Type': 'application/json'},
        //         withCredentials: true
        //     }
        // )
        // .then(function (response) {
        //         res.status(200).json({
        //             items:[]
        //         })
        //     }
        // ).catch(function (error) {
        //     console.log('profile error: ', error);
        //     res.status(error.response.status).json({
        //         items:[]
        //     })
        // });
        res.status(200).json({
            clientSectionContent:{
                'headLine_1': 'TRUSTED BY OVER',
                'headLine_number': '2300+',
                'headLine_2': 'COMPANIES IN THE WORLD',
            },
            clients: [
                '/assets/img/adidas.png',
                '/assets/img/client-1.png',
                '/assets/img/client-2.png',
                '/assets/img/client-3.png',
                '/assets/img/client-4.png',
                '/assets/img/client-5.png',
            ]
        })
    }
};
export default clientSectionContent;