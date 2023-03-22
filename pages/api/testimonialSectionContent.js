import axios from "axios";

const testimonialSectionContent = async (req, res) => {

    if (req.method === 'GET') {
        // await axios.get(process.env.NEXT_PUBLIC_API_URL + '/testimonialSectionContent',
        //     {
        //         headers: {'Content-Type': 'application/json'},
        //         withCredentials: true
        //     }
        // )
        // .then(function (response) {
        //         res.status(200).json({
        //             testimonialSectionContent:[]
        //         })
        //     }
        // ).catch(function (error) {
        //     console.log('profile error: ', error);
        //     res.status(error.response.status).json({
        //         testimonialSectionContent:[]
        //     })
        // });
        res.status(200).json({
            mainTestimonialSectionContent:{
                'headLine': 'Loved by the world&apos;s best teams',
                'body'    : 'What they say about us'
            },
           testimonialSectionContent:[
            {
                'headLine'  : '&quot;Really glad to have a call with Dani – super invaluable. She is full of energy and her ability to listen, and offer thoughtful advice was very helpful. Will definitely be booking.&quot;',
                'image'     : '/assets/img/testimonials-1.jpg',
                'name'      : 'Max',
                'profession': 'Photographer',
                'company'   : 'Gillette'
            },
            {
                'headLine'  : '&quot;Really glad to have a call with Dani – super invaluable. She is full of energy and her ability to listen, and offer thoughtful advice was very helpful. Will definitely be booking.&quot;',
                'image'     : '/assets/img/testimonials-1.jpg',
                'name'      : 'Max',
                'profession': 'Photographer',
                'company'   : 'Gillette'
            },{
                'headLine'  : '&quot;Really glad to have a call with Dani – super invaluable. She is full of energy and her ability to listen, and offer thoughtful advice was very helpful. Will definitely be booking.&quot;',
                'image'     : '/assets/img/testimonials-1.jpg',
                'name'      : 'Max',
                'profession': 'Photographer',
                'company'   : 'Gillette'
            },
            {
                'headLine'  : '&quot;Really glad to have a call with Dani – super invaluable. She is full of energy and her ability to listen, and offer thoughtful advice was very helpful. Will definitely be booking.&quot;',
                'image'     : '/assets/img/testimonials-1.jpg',
                'name'      : 'Max',
                'profession': 'Photographer',
                'company'   : 'Gillette'
            },
            {
                'headLine'  : '&quot;Really glad to have a call with Dani – super invaluable. She is full of energy and her ability to listen, and offer thoughtful advice was very helpful. Will definitely be booking.&quot;',
                'image'     : '/assets/img/testimonials-1.jpg',
                'name'      : 'Max',
                'profession': 'Photographer',
                'company'   : 'Gillette'
            }
           ]
        })
    }
};
export default testimonialSectionContent;