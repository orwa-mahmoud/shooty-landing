import React, { useState } from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../../store/actions';

function ForgotPassword() {

    const showForgotEmailModal = useSelector((state) => state.showHideModal.showForgotEmailModal)
    const dispatch =useDispatch()

    const closeModal = (e) => {
        e.preventDefault(); 
        dispatch(allActions.showHideModalActions.hideForgotEmailModal())
      }

  return (
    <>

      <Modal show={showForgotEmailModal} onHide={closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter"centered>

        <Modal.Body>
            <div className="container">
                <div className="row">
                    <div className="camera-ban col-md-4 p-0">
                        <div className="p-3">
                            <h3 className="pt-3 text-white">Start for free.</h3>
                        <p className="text-white ban-text-size">Nunc libero diam, pellentesque a erat at, laoreet dapibus enim. Donec risus nisi, egestas ullamcorper sem quis.</p>
                        </div>
                        <Image src="/assets/img/sd-camera.png"  alt="Shooty" fill className="img-fluid custom-img"/>
                    </div>
                    <div className="col-md-8 pr-0">
                        <div className="text-end">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => closeModal(e)}>
                            </button>
                        </div>
                        <div className="p-5  h-100" >
                            <h4 className="p-2">Forgot Password?</h4>

                            <div className="p-2 form-group mb-4">
                                <label htmlFor="email" className="mb-2" style={{color:"#666666"}}> EMAIL</label>
                                <input type="text" className="form-control input-background" name="email" id="email" placeholder="Email"/>
                            </div>

                            <div className="p-2 form-group mb-4">
                                    <button type="submit"  className="btn btn-block bg-dark rounded-4 w-100 text-white p-2">FORGOT PASSWORD</button>
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

export default ForgotPassword