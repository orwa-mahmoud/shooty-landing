import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <>
        <section id="hero" className="hero d-flex align-items-center">

            <div className="container">
                <div className="row">
                    <div className="col-lg-5 d-flex flex-column justify-content-center">
                        <h4 data-aos="fade-up" className="slogan-1">BUILDING CAPABILITIES</h4>
                        <h1 data-aos="fade-up">Enabling organizations<br/> to grow</h1>
                        <div data-aos="fade-up">
                            <div className="text-center text-lg-start">
                                <a href="#signUpModal" data-bs-toggle="modal" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>Signup for free</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <a data-aos="fade-up" href="#" className="slogan-2">Watch Demo</a>
                    </div>
                    <div className="col-lg-7 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <Image src="/assets/img/hero-img.png"  alt="" fill className="img-fluid custom-img"/>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default Hero