import axios from "axios";

const footerSectionContent = async (req, res) => {

    if (req.method === 'GET') {
        // await axios.get(process.env.NEXT_PUBLIC_API_URL + '/footerSectionContent',
        //     {
        //         headers: {'Content-Type': 'application/json'},
        //         withCredentials: true
        //     }
        // )
        // .then(function (response) {
        //         res.status(200).json({
        //             footerSectionContent:[]
        //         })
        //     }
        // ).catch(function (error) {
        //     console.log('profile error: ', error);
        //     res.status(error.response.status).json({
        //         footerSectionContent:[]
        //     })
        // });
        res.status(200).json({
            menuItems: [
                {
                    'header' : 'Community',
                    'menu'   : [
                        'Tutorials',
                        'Documentation',
                        'Forums'
                    ]
                },
                {
                    'header' : 'Services',
                    'menu'   : [
                        'Tutorials',
                        'Documentation',
                        'Forums'
                    ]
                },
                {
                    'header' : 'About Us',
                    'menu'   : [
                        'Tutorials',
                        'Documentation',
                        'Forums',
                        'Tutorials',
                        'Documentation',
                        'Forums'
                    ]
                }
            ],
           footerSectionContent:{
                'logo'               : '/assets/img/logo.png',
                'body'               : 'Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.',
                'legalPoliciesItems' : [
                    'Legal Notice',
                    ' Data Privacy',
                    'Terms Of Service',
                ]
            }
        })
    }
};
export default footerSectionContent;