import React,{ useEffect,useState } from 'react'
import Image from 'next/image'
import axios from "axios";
function Demo() {

    const [demoSectionContent, setDemoSectionContent] = useState([]);
    const [mainDemoSectionContent, setMainDemoSectionContent] = useState([]);

    const getDemoSectionContent = async (data) => {

        await axios.get("/api/demoSectionContent", data,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
        .then(async function (response) {
            setDemoSectionContent(response.data.demoSectionContent)
            setMainDemoSectionContent(response.data.mainDemoSectionContent)
        })
        .catch(function (error) {
            console.log('items error:',error);
        })
    }

    useEffect(() => {
        getDemoSectionContent()
    },[]);

  return (
    <>
        <section id="demo" className="demo">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 data-aos="fade-up">{mainDemoSectionContent.headLine}</h1>
                        <h2 data-aos="fade-up">{mainDemoSectionContent.body}</h2>
                    </div>
                </div>
                <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-lg-6">
                    {demoSectionContent.image && (
                        <Image src={demoSectionContent.image} fill className="img-fluid custom-img" alt="Slider"
                        data-aos="zoom-out" data-aos-delay="200" />
                    )}  
                    </div>
                    <div className="col-lg-6">
                        <div className="row d-flex flex-wrap align-items-center">
                            <div className="col-2">
                            {demoSectionContent.watchDemoIcon && (
                                <Image fill className="play-icon custom-img" src={demoSectionContent.watchDemoIcon} alt="Watch Demo" data-aos="fade-up"/>
                            )}
                            </div>
                            <div className="col-8">
                                <h4 data-aos="fade-up">{demoSectionContent.watchDemo}</h4>
                            </div>
                        </div>
                        <h3 className="mt-4" data-aos="fade-up">{demoSectionContent.headLine}</h3>
                        <p className="mt-4" data-aos="fade-up">{demoSectionContent.body}</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Demo