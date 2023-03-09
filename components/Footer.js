import React,{useState,useEffect} from 'react'
import Image from 'next/image'
function Footer() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        setScrolled(window.scrollY > 100);
    }

  return (
    <>
        <footer id="footer" className="footer">

            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">

                        <div className="col-lg-2 col-6 footer-links">
                            <h4><strike>Community</strike></h4>
                            <ul>
                                <li><a href="#"><strike>Tutorials</strike></a></li>
                                <li><a href="#"><strike>Documentation</strike></a></li>
                                <li><a href="#"><strike>Forums</strike></a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4><strike>Services</strike></h4>
                            <ul>
                                <li><a href="#"><strike>Tutorials</strike></a></li>
                                <li><a href="#"><strike>Documentation</strike></a></li>
                                <li><a href="#"><strike>Forums</strike></a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4><strike>About Us</strike></h4>
                            <ul>
                                <li><a href="#"><strike>Tutorials</strike></a></li>
                                <li><a href="#"><strike>Documentation</strike></a></li>
                                <li><a href="#"><strike>Forums</strike></a></li>
                                <li><a href="#"><strike>Tutorials</strike></a></li>
                                <li><a href="#"><strike>Documentation</strike></a></li>
                                <li><a href="#"><strike>Forums</strike></a></li>
                            </ul>
                        </div>

                        <div className="col-lg-6 col-md-12 footer-info">
                            <a href="index.html" className="logo d-flex align-items-center">
                               <Image src="/assets/img/logo.png" alt="Shooty"  width={100} height={50} className="img-fluid custom-img"/>
                            </a>
                            <br/>
                            <p>Lorem Ipsum is the single greatest threat. We are not -
                                we are not keeping up with other websites. Lorem Ipsum
                                best not make any more threats to your website. It will be
                                met with fire and fury like the world has never seen. Does
                                everybody know that pig named Lorem Ipsum? An ‘extremely
                                credible source’ has called my office and told me that Barack
                                Obama’s placeholder text is a fraud.</p>
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
                        &copy; Copyrights. 2023. Shapes Defined.
                    </div>
                    <div className="col-md-6 text-md-end">
                        <a className="footer-link" href="#">&#x2022; Legal Notice</a>
                        <a className="footer-link"  href="#">&#x2022; Data Privacy</a>
                        <a className="footer-link"  href="#">&#x2022; Terms Of Service</a>
                    </div>
                </div>
            </div>
        </footer>
        <a href="#" className={"back-to-top d-flex align-items-center justify-content-center" + (scrolled ? ' active': '')}><i className="bi bi-arrow-up-short"></i></a>
    </>
  )
}

export default Footer