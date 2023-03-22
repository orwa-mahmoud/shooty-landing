import axios from "axios";

const benefitSectionContent = async (req, res) => {

    if (req.method === 'GET') {
        // await axios.get(process.env.NEXT_PUBLIC_API_URL + '/benefitSectionContent',
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
            mainBenefitSectionContent:                {
                'icon'    : '',
                'headLine': 'Providing you with the simplest solutions to manage your own business.',
                'body'    : 'You get a machine with resources solely allocated to your business'
            },
            benefitSectionContent:[
                {
                    'icon'    : '/assets/img/icon1.svg',
                    'headLine': 'Get Discovered',
                    'body'    : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    'icon'    : '/assets/img/icon2.svg',
                    'headLine': 'Maximise Your Exposure',
                    'body'    : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    'icon'    : '/assets/img/icon3.svg',
                    'headLine': 'Your Choice',
                    'body'    : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    'icon'    : '/assets/img/icon1.svg',
                    'headLine': 'Get Discovered',
                    'body'    : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    'icon'    : '/assets/img/icon2.svg',
                    'headLine': 'Maximise Your Exposure',
                    'body'    : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },
                {
                    'icon'    : '/assets/img/icon3.svg',
                    'headLine': 'Your Choice',
                    'body'    : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos; standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                },

            ]
        })
    }
};
export default benefitSectionContent;