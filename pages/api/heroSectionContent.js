import axios from "axios";

const heroSectionContent = async (req, res) => {

    if (req.method === 'GET') {
        // await axios.get(process.env.NEXT_PUBLIC_API_URL + '/heroSectionContent',
        //     {
        //         headers: {'Content-Type': 'application/json'},
        //         withCredentials: true
        //     }
        // )
        // .then(function (response) {
        //         res.status(200).json({
        //             heroSectionContent:[]
        //         })
        //     }
        // ).catch(function (error) {
        //     console.log('profile error: ', error);
        //     res.status(error.response.status).json({
        //         heroSectionContent:[]
        //     })
        // });
        res.status(200).json({
            heroSectionContent:{
                'slogan_1'   : 'BUILDING CAPABILITIES',
                'headLine_1' : 'Enabling organizations',
                'headLine_2' : 'to grow',
                'watchDemo'  : 'Watch Demo',
                'signup'     : 'Signup for free',
                'hero_img'   : '/assets/img/hero-img.png'
            }
        })
    }
};
export default heroSectionContent;