import { useEffect,useState,useRef } from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../store/actions';

function Header() {

    const showLoginModal = useSelector((state) => state.showHideModal.showLoginModal)
    const dispatch =useDispatch()
    
    const [headerScrolled, setheaderScrolled] = useState(false);
    const [navbarMobile, setNavbarMobile] = useState(false);
    const mobileNavToggleRef = useRef(null);
    const navbarMobileRef    = useRef(null);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        setheaderScrolled(window.scrollY > 180);
    }

    const loginShowModal = (e) => {
        e.preventDefault(); 
        dispatch(allActions.showHideModalActions.showLoginModal())
    }

    const signupShowModal = (e) => {
        e.preventDefault(); 
        dispatch(allActions.showHideModalActions.showSignupModal())
    }

    const  handleNavbarMobile = (e) => {
        if (e.currentTarget.classList.contains('bi-list')) {
            setNavbarMobile(true)
            e.target.classList.add('bi-x')
            e.target.classList.remove('bi-list')
          }else if (e.currentTarget.classList.contains('bi-x')) {
            setNavbarMobile(false)
            e.target.classList.remove('bi-x')
            e.target.classList.add('bi-list')
            navbarMobileRef.current.classList.remove('navbar-mobile')
          }
    }

  return (
    <>
    <header id="header" className={ "header fixed-top "+(headerScrolled ? "header-scrolled":'')} >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href={"/"} className="logo d-flex align-items-center">
                <Image src="/assets/img/logo.png" alt="Shooty" width={100} height={50}/>
            </a>
            <nav ref={navbarMobileRef} id="navbar" className={"navbar "+(navbarMobile ? 'navbar-mobile': '')}>
                <ul>
                    <li><a className="nav-link scrollto" href="">Solutions</a></li>
                    <li><a className="nav-link scrollto" href="">Platform</a></li>
                    <li><a className="nav-link scrollto" href="">Resources</a></li>
                    <li><a className="nav-link scrollto" href="">Case Studies</a></li>
                    <li><a className="nav-link scrollto" href="">Marketplace</a></li>
                    <li><a className="nav-link scrollto" href="">Trial</a></li>
                    <li>
                        <a className="nav-link scrollto" href="#" data-bs-toggle="modal"
                           onClick={(e) => loginShowModal(e)}>Login
                        </a>
                    </li>
                    <li>
                        <a className="getstarted scrollto" href={"#signUpModal"} data-bs-toggle="modal"
                           onClick={(e) => signupShowModal(e)}>Join for free
                        </a>
                    </li>
                </ul>
                <i ref={mobileNavToggleRef} className="bi  mobile-nav-toggle bi-list" onClick={(e) => handleNavbarMobile(e)}></i>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header