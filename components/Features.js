import React, { useState } from 'react'
import Image from 'next/image'
function Features() {

    const [activeId, setActiveId] = useState('tab1');

    const values = [
        { id: "tab1", text: "Capitalize On Custom" },
        { id: "tab2", text: "eCommerce Trends" },
        { id: "tab3", text: "On Demand Platforms" },
        { id: "tab4", text: "Growth Trends" }
      ];

  const  changeTab = (e,val) => {
    setActiveId(val)
  }

  return (
    <>
        <section id="features" className="features">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 data-aos="fade-up">Integrations and API endpoints for compatibility. And opportunity.</h1>
                        <p data-aos="fade-up">Workflow software for content creation at scale</p>
                    </div>
                </div>
                <div className="row feture-tabs">
                    <div className="col-12">
                        <ul className="nav nav-pills mb-3">
                        {values.map((val,index) => (
                            <li className={"nav-link" + (activeId === val.id ? " active" : "")}
                                data-bs-toggle="pill" href="#tab1"
                                onClick={(e) => changeTab(e,val.id)} key={index}>
                                {val.text}
                            </li>
                            ))}
                        </ul>
                        <div className="tab-content">
                            <div className={"tab-pane fade show"+ (activeId === 'tab1' ? " active" : "")} id="tab1">
                                <div className="row d-flex flex-wrap align-items-center">
                                    <div className="col-lg-6">
                                        <h3 className="mt-4" data-aos="fade-up">Capitalize On Custom</h3>
                                        <p className="mt-4" data-aos="fade-up">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commo
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <Image src="/assets/img/laptop.png" fill className="img-fluid custom-img" alt="Slider"
                                            data-aos="zoom-out" data-aos-delay="200"/>
                                    </div>
                                </div>
                            </div>
                            <div className={"tab-pane fade show"+ (activeId === 'tab2' ? " active" : "")} id="tab2">
                                <div className="row d-flex flex-wrap align-items-center">
                                    <div className="col-lg-6">
                                        <h3 className="mt-4" data-aos="fade-up">eCommerce Trends</h3>
                                        <p className="mt-4" data-aos="fade-up">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commo
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <Image src="/assets/img/laptop.png" fill className="img-fluid custom-img" alt="Slider"
                                            data-aos="zoom-out" data-aos-delay="200"/>
                                    </div>
                                </div>
                            </div>
                            <div className={"tab-pane fade show"+ (activeId === 'tab3' ? " active" : "")} id="tab3">
                                <div className="row d-flex flex-wrap align-items-center">
                                    <div className="col-lg-6">
                                        <h3 className="mt-4" data-aos="fade-up">On Demand Platforms</h3>
                                        <p className="mt-4" data-aos="fade-up">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commo
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <Image src="/assets/img/laptop.png" fill className="img-fluid custom-img" alt="Slider"
                                            data-aos="zoom-out" data-aos-delay="200"/>
                                    </div>
                                </div>
                            </div>
                            <div className={"tab-pane fade show"+ (activeId === 'tab4' ? " active" : "")} id="tab4">
                                <div className="row d-flex flex-wrap align-items-center">
                                    <div className="col-lg-6">
                                        <h3 className="mt-4" data-aos="fade-up">Growth Trends</h3>
                                        <p className="mt-4" data-aos="fade-up">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commo
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <Image src="/assets/img/laptop.png" fill className="img-fluid custom-img" alt="Slider"
                                            data-aos="zoom-out" data-aos-delay="200"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features