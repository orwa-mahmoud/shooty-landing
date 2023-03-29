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
            items:[
                { id: 1, name: 'Solutions', link: '#solutions' },
                { id: 2, name: 'Platform', link: '#platform' },
                { id: 3, name: 'Resources', link: '/' },
                { id: 4, name: 'Case Studies', link: '/' },
                { id: 5, name: 'Marketplace', link: '/' },
                { id: 6, name: 'Trial', link: '/' },
                { id: 7, name: 'Login', link: '/' },
                { id: 8, name: 'Join for free', link: '/' },
            ]
        })
    }
};
export default headerItems;