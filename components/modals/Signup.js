import React from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../../store/actions';

function Signup() {


  const showSignupModal = useSelector((state) => state.showHideModal.showSignupModal)
  const dispatch =useDispatch()


  const closeModal = (e) => {
    e.preventDefault(); 
    dispatch(allActions.showHideModalActions.hideSignupModal())
  }

  const openLoginModal = (e) => {
    e.preventDefault(); 
    dispatch(allActions.showHideModalActions.hideSignupModal())
    dispatch(allActions.showHideModalActions.showLoginModal())
  }

  const openVirifyEmailModal = (e) => {
    e.preventDefault(); 
    dispatch(allActions.showHideModalActions.hideSignupModal())
    dispatch(allActions.showHideModalActions.showVirifyEmailModal())
  }


  return (
    <>

      <Modal show={showSignupModal} onHide={closeModal} size="xl" aria-labelledby="contained-modal-title-vcenter"centered>

        <Modal.Body>
             <div className="container">
                <div className="row">
                    <div className="camera-ban col-md-4 p-0">
                        <div className="p-3">
                            <h3 className="pt-3 text-white">Start for free.</h3>
                        <p className="text-white ban-text-size" >Nunc libero diam, pellentesque a erat at, laoreet dapibus enim. Donec risus nisi, egestas ullamcorper sem quis.</p>
                        </div>
                        <Image src="/assets/img/sd-camera.png"  alt="Shooty" fill className="img-fluid custom-img"/>
                    </div>
                    <div className="col-md-8 pr-0">
                        <div className="text-end">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={(e) => closeModal(e)}>
                            </button>
                        </div>
                        <div className="p-5 pt-1 pb-2">
                            <h4>Create New Account</h4>
                            <p style={{color:"#A3A3A3"}}>Already have an account? <a href="#loginModal" data-bs-toggle="modal" className="main-color"  onClick={(e) => openLoginModal(e)}>Login</a> </p>

                            <div className="form-group mb-4">
                                <label htmlFor="name" className="mb-2"> ARE YOU A (*)</label>
                                <select className="form-select input-background" aria-label="Select Type" name="userType" id="userType" >
                                    <option value="Select Type">Select Type</option>
                                    <option value="Studio">Studio</option>
                                    <option value="Freelancer">Freelancer</option>
                                    <option value="Photographer">Photographer</option>
                                    <option value="">Other</option>
                                </select>
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="name" className="mb-2" style={{color:"#666666"}}> NAME (*)</label>
                                <input type="text" className="form-control input-background" name="name" id="name" placeholder="Name" />
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="email" className="mb-2" style={{color:"#666666"}}> EMAIL (*)</label>
                                <input type="text" className="form-control input-background" name="email" id="email" placeholder="Email"/>
                            </div>

                            <div className="form-group mb-4">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="password" className="mb-2" style={{color:"#666666"}}> PASSWORD (*)</label>
                                <input type="text" className="form-control input-background"  name="password" id="password" placeholder="Password"/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="confirmPassword" className="mb-2" style={{color:"#666666"}}> REPEAT PASSWORD (*)</label>
                                <input type="text" className="form-control input-background"  name="confirmPassword" id="confirmPassword" placeholder=" Repeat Password"/>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="row mb-4 justify-content-between">
                                <div className="col">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked onChange={() => {}}/>
                                    <label className="form-check-label" htmlFor="form2Example31"> By clicking continue above, you acknowledge that you have read, understood and agree to our Terms & Conditions , Privacy Policy and Legal Notice!e </label>
                                </div>
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                    <button type="submit"  className="btn btn-block bg-dark rounded-4 w-100 text-white p-2" href="#verifyEmailModal" data-bs-toggle="modal" onClick={(e) => openVirifyEmailModal(e)}>SIGN UP</button>
                            </div>

                            <div>
                                <p>Or register with</p>
                                <div className="btn-group d-flex flex-wrap" role="group">
                                <a href="#" className="btn btn-google border rounded-2 mb-20 me-2 mb-2">
                                        <Image src="/assets/img/icon-google.png" alt="GOOGLE" fill className="img-fluid custom-img width-20 "/>
                                        {' '} Google
                                        </a>
                                    <a href="#" className="btn btn-face border rounded-2 m-b-20 me-2 mb-2">
                                        <Image  src="/assets/img/icon-facebook.png" alt="FACEBOOK" fill className="img-fluid custom-img width-20"/>
                                        {' '} Facebook
                                        </a>
                                    <a href="#" className="btn btn-twitter border rounded-2 m-b-20 me-2 mb-2">
                                        <Image  src="/assets/img/icon-twitter.png" alt="TWITTER" fill className="img-fluid custom-img width-20 "/>
                                        {' '} Twitter
                                        </a>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Modal.Body>

      </Modal>


    </>
  )
}

export default Signup