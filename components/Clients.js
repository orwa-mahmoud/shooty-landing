import React from 'react'
import Image from 'next/image'
function Clients() {
  return (
   <>
    <section id="clients" className="clients text-center">
            <div className="container">
                <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-12">
                        <h2>
                            TRUSTED BY OVER 2300+ COMPANIES IN THE WORLD
                        </h2>
                    </div>
                    <div className="col-4 col-lg-2" data-aos="zoom-out" data-aos-delay="100" >
                        <Image src="/assets/img/adidas.png" alt="Dior"  width={100} height={50} className="custom-img width-60 img-fluid"/>
                    </div>
                    <div className="col-4 col-lg-2" data-aos="zoom-out" data-aos-delay="100" >
                        <Image src="/assets/img/client-1.png" alt="Dior"  width={100} height={50} className="custom-img width-60  img-fluid"/>
                    </div>
                    <div className="col-4 col-lg-2" data-aos="zoom-out" data-aos-delay="100">
                        <Image src="/assets/img/client-2.png" alt="Dior"  width={100} height={50} className="custom-img width-60  img-fluid"/>
                    </div>
                    <div className="col-4 col-lg-2" data-aos="zoom-out" data-aos-delay="100">
                        <Image src="/assets/img/client-3.png" alt="Dior"  width={100} height={50} className="custom-img width-60  img-fluid"/>
                    </div>
                    <div className="col-4 col-lg-2" data-aos="zoom-out" data-aos-delay="100">
                        <Image src="/assets/img/client-4.png" alt="Dior"  width={100} height={50} className="custom-img width-60  img-fluid"/>
                    </div>
                    <div className="col-4 col-lg-2" data-aos="zoom-out" data-aos-delay="100">
                        <Image src="/assets/img/client-5.png" alt="Dior"  width={100} height={50} className="custom-img width-60  img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
   </>
  )
}

export default Clients