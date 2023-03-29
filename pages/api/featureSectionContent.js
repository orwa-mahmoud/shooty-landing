import axios from "axios";

const featureSectionContent = async (req, res) => {

    if (req.method === 'GET') {
        // await axios.get(process.env.NEXT_PUBLIC_API_URL + '/featureSectionContent',
        //     {
        //         headers: {'Content-Type': 'application/json'},
        //         withCredentials: true
        //     }
        // )
        // .then(function (response) {
        //         res.status(200).json({
        //             featureSectionContent:[]
        //         })
        //     }
        // ).catch(function (error) {
        //     console.log('profile error: ', error);
        //     res.status(error.response.status).json({
        //         featureSectionContent:[]
        //     })
        // });
        res.status(200).json({
            tabs:[
                { id: "tab1", text: "Capitalize On Custom" },
                { id: "tab2", text: "eCommerce Trends" },
                { id: "tab3", text: "On Demand Platforms" },
                { id: "tab4", text: "Growth Trends" }
            ],
            mainFeatureSectionContent:{
                'headLine': 'Integrations and API endpoints for compatibility. And opportunity.',
                'body'    : 'Workflow software for content creation at scale'
            },
            featureSectionContent:[
                {
                    'id'        : 'tab1',
                    'headLine'  : 'Capitalize On Custom',
                    'body'      : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo',
                    'image'     : '/assets/img/laptop.png',
                },
                {
                    'id'        : 'tab2',
                    'headLine'  : 'eCommerce Trends',
                    'body'      : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo',
                    'image'     : '/assets/img/laptop.png',
                },
                {
                    'id'        : 'tab3',
                    'headLine'  : 'On Demand Platforms',
                    'body'      : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo',
                    'image'     : '/assets/img/laptop.png',
                },
                {
                    'id'        : 'tab4',
                    'headLine'  : 'Growth Trends',
                    'body'      : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo',
                    'image'     : '/assets/img/laptop.png',
                },

            ]
        })
    }
};
export default featureSectionContent;