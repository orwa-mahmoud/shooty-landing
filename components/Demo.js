import React from 'react'
import Image from 'next/image'
function Demo() {
  return (
    <>
        <section id="demo" className="demo">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 data-aos="fade-up">Creative studio with art & technologies.</h1>
                        <h2 data-aos="fade-up">You get a machine with resources solely allocated to your business.</h2>
                    </div>
                </div>
                <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-lg-6">
                        <Image src="/assets/img/frame-slider.png" fill className="img-fluid custom-img" alt="Slider"
                            data-aos="zoom-out" data-aos-delay="200" />
                    </div>
                    <div className="col-lg-6">
                        <div className="row d-flex flex-wrap align-items-center">
                            <div className="col-2">
                                <Image fill className="play-icon custom-img" src="/assets/img/Play%20Icon.png" alt="Watch Demo" data-aos="fade-up"/>
                            </div>
                            <div className="col-8">
                                <h4 data-aos="fade-up">Watch Demo</h4>
                            </div>
                        </div>
                        <h3 className="mt-4" data-aos="fade-up">Creating a higher spacing and how people move through a unique and impactful dashboard</h3>
                        <p className="mt-4" data-aos="fade-up">
                            Profesionales del diseño gráfico proident, taken of my entire soul,
                            like these sweet mornings of spring which I enjoy whole. Diseñador Gráfico y
                            Digital y además como greate idea.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Demo