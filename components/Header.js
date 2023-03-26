import { useEffect,useState,useRef } from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux';
import allActions from '../store/actions';
import axios from "axios";

function Header() {

    const showLoginModal = useSelector((state) => state.showHideModal.showLoginModal)
    const dispatch =useDispatch()
    
    const [headerItems, setHeaderItems] = useState([]);
    const [logo, setLogo] = useState('');
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

    const getHeaderItems = async (data) => {

        await axios.get("/api/headerItems", data,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
        .then(async function (response) {
          setHeaderItems(response.data.items)
          setLogo(response.data.logo)
        })
        .catch(function (error) {
            console.log('items error:',error);
        })
    }

    useEffect(() => {
        getHeaderItems()
    },[]);

  return (
    <>
    <header id="header" className={ "header fixed-top "+(headerScrolled ? "header-scrolled":'')} >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href={"/"} className="logo d-flex align-items-center">
            {logo && (
                <Image src={logo} alt="Shooty" width={100} height={50} className="img-fluid custom-img" priority={true}/>
            )}
            </a>
            <nav ref={navbarMobileRef} id="navbar" className={"navbar "+(navbarMobile ? 'navbar-mobile': '')}>
                <ul>
                    {headerItems.map((item,index) => {
                        if(item === 'Login'){
                           return   <li key={index}>
                                        <a className="nav-link scrollto" href="#" data-bs-toggle="modal"
                                            onClick={(e) => loginShowModal(e)}>{item}
                                        </a>
                                    </li>
                        }else if(item === 'Join for free'){
                            return  <li key={index}>
                                        <a className="getstarted scrollto" href={"#signUpModal"} data-bs-toggle="modal"
                                        onClick={(e) => signupShowModal(e)}>{item}
                                        </a>
                                    </li>
                        }else{
                            return  <li key={index}><a className="nav-link scrollto" href="">{item}</a></li>
                        } 
                    })}
                </ul>
                <i ref={mobileNavToggleRef} className="bi  mobile-nav-toggle bi-list" onClick={(e) => handleNavbarMobile(e)}></i>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Header