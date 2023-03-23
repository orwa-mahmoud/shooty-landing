import React,{ useEffect,useState } from 'react'
import Image from 'next/image'
import axios from "axios";
function Benefits() {

    const [benefitSectionContent, setBenefitSectionContent] = useState([]);
    const [mainBenefitSectionContent, setMainBenefitSectionContent] = useState([]);

    const getBenefitSectionContent = async (data) => {

        await axios.get("/api/benefitSectionContent", data,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
        .then(async function (response) {
            setBenefitSectionContent(response.data.benefitSectionContent)
            setMainBenefitSectionContent(response.data.mainBenefitSectionContent)
        })
        .catch(function (error) {
            console.log('items error:',error);
        })
    }

    useEffect(() => {
        getBenefitSectionContent()
    },[]);

  return (
    <>
    <section id="icons" className="icons">
        <div className="container">
            <div className="row text-center">
                <div className="col-12">
                    <h1 data-aos="fade-up">{mainBenefitSectionContent.headLine}</h1>
                    <h3 data-aos="fade-up">{mainBenefitSectionContent.body}</h3>
                </div>
            </div>
            <div className="row mt-5">
                {benefitSectionContent && (
                    benefitSectionContent.map((item,index) => {
                        return (
                            <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 p-4" data-aos="zoom-out" data-aos-delay="100" >
                                <Image src={item.icon} alt="Feature 1" width={100} height={50}  className="icon  custom-img width-10" />
                                <h2>{item.headLine}</h2>
                                <p>{item.body}</p>
                            </div>
                        )
                    })
                )

                }
            </div>
        </div>
    </section>
    </>
  )
}

export default Benefits