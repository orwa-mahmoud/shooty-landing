import React from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../../store/actions';

function Login() {
    

  const showLoginModal = useSelector((state) => state.showHideModal.showLoginModal)
  const dispatch =useDispatch()

  const closeModal = (e) => {
    e.preventDefault(); 
    dispatch(allActions.showHideModalActions.hideLoginModal())
  }

  const openSignupModal = (e) => {
    e.preventDefault(); 
    dispatch(allActions.showHideModalActions.hideLoginModal())
    dispatch(allActions.showHideModalActions.showSignupModal())
  }

  const openForgetEmailModal = (e) => {
    e.preventDefault(); 
    dispatch(allActions.showHideModalActions.hideLoginModal())
    dispatch(allActions.showHideModalActions.showForgotEmailModal())
  }

  return (
    <>
      <Modal show={showLoginModal} onHide={closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter"centered>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
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
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => closeModal(e)}>
                            </button>
                        </div>
                        <div className="p-5">
                            <h4>Welcome back!</h4>
                            <p className='have-accoiunt-color'>Don&apos;t have an account? <a  href="#signUpModal" data-bs-toggle="modal" className="main-color" onClick={(e) => openSignupModal(e)}>Sign Up</a> </p>

                            <div className="form-group mb-4">
                                <label htmlFor="email" className="mb-2 for-label-color "  > EMAIL</label>
                                <input type="text" className="form-control input-background" name="email" id="email" placeholder="Email"/>
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="password" className="mb-2 for-label-color "  > PASSWORD</label>
                                <input type="text" className="form-control input-background"  name="password" id="password" placeholder="Password"/>
                            </div>

                            <div className="row mb-4 justify-content-between">
                                <div className="col">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked onChange={() => {}}/>
                                    <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                </div>
                                </div>

                                <div className="col text-end forgot-text-right">
                                <a href="#forgotPasswordModal" data-bs-toggle="modal" className="main-color" onClick={(e) => openForgetEmailModal(e)}>Forgot password?</a>
                                </div>
                            </div>

                            <div className="form-group mb-4">
                                    <button type="submit"  className="btn btn-block bg-dark rounded-4 w-100 text-white p-2" >LOGIN</button>
                            </div>

                            <div>
                                <p>Or Login with</p>
                                <div className="btn-group d-flex flex-wrap" role="group">
                                <a href="#" className="btn btn-google border rounded-2 m-b-20 me-2 mb-2">
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
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default Login