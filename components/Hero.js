import React,{ useEffect,useState } from 'react'
import Image from 'next/image'
import axios from "axios";
import { useDispatch } from 'react-redux';
import allActions from '../store/actions';
function Hero() {

    const [heroSectionContent, setHeroSectionContent] = useState([]);

    const getHeroSectionContent = async (data) => {

        await axios.get("/api/heroSectionContent", data,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
        .then(async function (response) {
            setHeroSectionContent(response.data.heroSectionContent)
        })
        .catch(function (error) {
            console.log('items error:',error);
        })
    }

    useEffect(() => {
        getHeroSectionContent()
    },[]);

    const dispatch =useDispatch()

    const signupShowModal = (e) => {
        e.preventDefault(); 
        dispatch(allActions.showHideModalActions.showSignupModal())
    }

  return (
    <>
        <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 d-flex flex-column justify-content-center">
                        <h4 data-aos="fade-up" className="slogan-1">{heroSectionContent.slogan_1}</h4>
                        <h1 data-aos="fade-up">{heroSectionContent.headLine_1}<br/> {heroSectionContent.headLine_2}</h1>
                        <div data-aos="fade-up">
                            <div className="text-center text-lg-start">
                                <a href={"#signUpModal"} data-bs-toggle="modal"  onClick={(e) => signupShowModal(e)}
                                   className="btn-get-started scrollto d-inline-flex align-items-center
                                   justify-content-center align-self-center">
                                    <span>{heroSectionContent.signup}</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <a data-aos="fade-up" href="#platform" className="slogan-2">{heroSectionContent.watchDemo}</a>
                    </div>
                    <div className="col-lg-7 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        {heroSectionContent.hero_img && (
                            <Image
                                src={heroSectionContent.hero_img}
                                alt="" 
                                fill 
                                className="img-fluid custom-img"
                                priority={true}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero