import axios from "axios";

const demoSectionContent = async (req, res) => {

    if (req.method === 'GET') {
        // await axios.get(process.env.NEXT_PUBLIC_API_URL + '/demoSectionContent',
        //     {
        //         headers: {'Content-Type': 'application/json'},
        //         withCredentials: true
        //     }
        // )
        // .then(function (response) {
        //         res.status(200).json({
        //             demoSectionContent:[]
        //         })
        //     }
        // ).catch(function (error) {
        //     console.log('profile error: ', error);
        //     res.status(error.response.status).json({
        //         demoSectionContent:[]
        //     })
        // });
        res.status(200).json({
            mainDemoSectionContent:{
                'headLine': 'Creative studio with art & technologies.',
                'body'    : 'You get a machine with resources solely allocated to your business.'
            },
           demoSectionContent:{
                'image'         : '/assets/img/frame-slider.png',
                'watchDemoIcon' : '/assets/img/Play%20Icon.png',
                'watchDemo'     : 'Watch Demo',
                'headLine'      : 'Creating a higher spacing and how people move through a unique and impactful dashboard',
                'body'          : 'Profesionales del diseño gráfico proident, taken of my entire soul, like these sweet mornings of spring which I enjoy whole. Diseñador Gráfico y Digital y además como greate idea.'
            }
        })
    }
};
export default demoSectionContent;