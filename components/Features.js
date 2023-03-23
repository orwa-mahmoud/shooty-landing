import React,{ useEffect,useState } from 'react'
import Image from 'next/image'
import axios from "axios";
function Features() {

    const [activeId, setActiveId] = useState('tab1');
    const [tabs, setTabs]         = useState([]);

    const [featureSectionContent, setFeatureSectionContent]         = useState([]);
    const [mainFeatureSectionContent, setMainFeatureSectionContent] = useState([]);

    const getFeatureSectionContent = async (data) => {

        await axios.get("/api/featureSectionContent", data,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
        .then(async function (response) {
            setTabs(response.data.tabs)
            setFeatureSectionContent(response.data.featureSectionContent)
            setMainFeatureSectionContent(response.data.mainFeatureSectionContent)
        })
        .catch(function (error) {
            console.log('items error:',error);
        })
    }

    useEffect(() => {
        getFeatureSectionContent()
    },[]);



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
                        <h1 data-aos="fade-up">{mainFeatureSectionContent.headLine}</h1>
                        <p data-aos="fade-up">{mainFeatureSectionContent.body}</p>
                    </div>
                </div>
                <div className="row feture-tabs">
                    <div className="col-12">
                        <ul className="nav nav-pills mb-3">
                        {tabs.map((val,index) => (
                            <li className={"nav-link" + (activeId === val.id ? " active" : "")}
                                data-bs-toggle="pill" href="#tab1"
                                onClick={(e) => changeTab(e,val.id)} key={index}>
                                {val.text}
                            </li>
                            ))}
                        </ul>
                        <div className="tab-content">
                            {
                                featureSectionContent.map((item,index) => {
                                    return (
                                        <div key={index} className={"tab-pane fade show"+ (activeId === item.id ? " active" : "")} id={item.id}>
                                            <div className="row d-flex flex-wrap align-items-center">
                                                <div className="col-lg-6">
                                                    <h3 className="mt-4" data-aos="fade-up">{item.headLine}</h3>
                                                    <p className="mt-4" data-aos="fade-up">{item.body}</p>
                                                </div>
                                                <div className="col-lg-6">
                                                {item.image && (
                                                    <Image src={item.image} fill className="img-fluid custom-img" alt="Slider"
                                                    data-aos="zoom-out" data-aos-delay="200"/>
                                                )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features