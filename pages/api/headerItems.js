import axios from "axios";

const headerItems = async (req, res) => {

    if (req.method === 'GET') {
        // await axios.get(process.env.NEXT_PUBLIC_API_URL + '/headerItems',
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
            logo:'/assets/img/logo.png',
            items:['Solutions','Platform','Resources','Case Studies','Marketplace','Trial','Login','Join for free']
        })
    }
};
export default headerItems;