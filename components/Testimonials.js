import React,{ useEffect,useState } from 'react'
import Image from 'next/image'
import axios from "axios";
function Testimonials() {

    const [testimonialSectionContent, setTestimonialSectionContent] = useState([]);
    const [mainTestimonialSectionContent, setMainTestimonialSectionContent] = useState([]);

    const getTestimonialSectionContent = async (data) => {

        await axios.get("/api/testimonialSectionContent", data,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
        .then(async function (response) {
            setTestimonialSectionContent(response.data.testimonialSectionContent)
            setMainTestimonialSectionContent(response.data.mainTestimonialSectionContent)
        })
        .catch(function (error) {
            console.log('items error:',error);
        })
    }

    useEffect(() => {
        getTestimonialSectionContent()
    },[]);


  return (
    <>
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 data-aos="fade-up">{mainTestimonialSectionContent.headLine}</h1>
                        <p data-aos="fade-up">{mainTestimonialSectionContent.body}</p>
                    </div>
                </div>
                <div className="swiffy-slider slider-item-show3 slider-nav-dark slider-nav-outside-expand slider-nav-autoplay">
                    <ul className="slider-container py-4">
                        {testimonialSectionContent.map((item,index) => {
                            return (
                                <li key={index}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h2>{item.headLine}</h2>
                                            <div className="row mt-5">
                                                <div className="col-3">
                                                {item.image && (
                                                    <Image   width={100} height={50} className="img-fluid custom-img" src={item.image} alt="Person Name" style={{ position: "relative" }}/>
                                                )}
                                                </div>
                                                <div className="col-8">
                                                    <h3>{item.name}</h3>
                                                    <h6>{item.profession},</h6>
                                                    <h5>{item.company}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )

                        })}
                    </ul>
                    <button type="button" className="slider-nav" aria-label="Go left"></button>
                    <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonials