import React,{ useEffect,useState } from 'react'
import Image from 'next/image'
import axios from "axios";
function Footer() {

    const currentYear = new Date().getFullYear();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        setScrolled(window.scrollY > 100);
    }

    const [footerSectionContent, setFooterSectionContent] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [legalPoliciesItems, setLegalPoliciesItems] = useState([]);

    const getFooterSectionContent = async (data) => {

        await axios.get("/api/footerSectionContent", data,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
        .then(async function (response) {
            setFooterSectionContent(response.data.footerSectionContent)
            setMenuItems(response.data.menuItems)
            setLegalPoliciesItems(response.data.footerSectionContent.legalPoliciesItems)
        })
        .catch(function (error) {
            console.log('items error:',error);
        })
    }

    useEffect(() => {
        getFooterSectionContent()
    },[]);

  return (
    <>
        <footer id="footer" className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        {
                            menuItems.map((item,index) => {
                                return (
                                    <div key={index} className="col-lg-2 col-6 footer-links">
                                        <h4><strike>{item.header}</strike></h4>
                                        <ul>
                                            {
                                             item.menu.map((item2,index2) => {
                                                    return (
                                                        <li key={index2} ><a href="#"><strike>{item2}</strike></a></li>
                                                    )
                                              })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                        <div className="col-lg-6 col-md-12 footer-info">
                            <a href="index.html" className="logo d-flex align-items-center">
                                {footerSectionContent.logo && (
                                  <Image src={footerSectionContent.logo} alt="Shooty"  width={100} height={50} className="img-fluid custom-img"/>
                                )}
                            </a>
                            <br/>
                            <p>{footerSectionContent.body}</p>
                            <div className="social-links mt-5">
                                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6 text-md-start copyright">
                        &copy; Copyrights. &copy; {currentYear}. Shooty.
                    </div>
                    <div className="col-md-6 text-md-end">
                        {
                            legalPoliciesItems.map((item,index) => {
                                return(
                                    <a key={index} className="footer-link" href="#">&#x2022; {item}</a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </footer>
        <a href="#" className={"back-to-top d-flex align-items-center justify-content-center" + (scrolled ? ' active': '')}><i className="bi bi-arrow-up-short"></i></a>
    </>
  )
}

export default Footer