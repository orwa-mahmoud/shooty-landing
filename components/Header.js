import { useEffect,useState } from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../store/actions';

function Header() {

    const showLoginModal = useSelector((state) => state.showHideModal.showLoginModal)
    const dispatch =useDispatch()
    
    const [headerScrolled, setheaderScrolled] = useState(false);

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

  return (
    <>
    <header id="header" className={ "header fixed-top "+(headerScrolled ? "header-scrolled":'')} >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href={"/"} className="logo d-flex align-items-center">
                <Image src="/assets/img/logo.png" alt="Shooty" width={100} height={50}/>
            </a>
            <nav id="navbar" className="navbar">
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
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header