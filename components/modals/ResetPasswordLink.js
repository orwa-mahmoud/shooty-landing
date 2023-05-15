import React, { useState } from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../../store/actions';
import auth from '../../store/reducers/auth';
import axios from "axios";

function ResetPasswordLink() {

  const showResetPasswordLinkEmailModal = useSelector((state) => state.showHideModal.showResetPasswordLinkEmailModal)
  const restPasswordEmail = useSelector((state) => state.auth.resetPasswordEmail)
  const dispatch =useDispatch()


  const closeModal = (e) => {
    //e.preventDefault(); 
    dispatch(allActions.showHideModalActions.hideResetPasswordLinkEmailModal())
  }

  return (
    <>
      <Modal show={showResetPasswordLinkEmailModal} onHide={closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter"centered>

        <Modal.Body>
            <div className="container p-4">
                <div className="text-end">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => closeModal(e)}>
                    </button>
                </div>
                <div className="row text-center" >
                    <div className="col-md-12 modal-logo ">
                            <a href="index.html" className="logo  align-items-center">
                                <Image   src="/assets/img/logo.png" alt="Shooty"  width={100} height={50} className="mb-4  img-fluid custom-img"/>
                            </a>
                        <h4 className="p-2">Reset Password Link Email</h4>
                        <p style={{color:"#666666"}}>We have sent an email to <span className="text-dark fw-bold">{restPasswordEmail}</span> </p>
                        <p style={{color:"#666666"}}> Thank you! We have just sent you an email with instructions on how to reset your password. Please check your inbox and follow the link provided to complete the process. If you do not receive the email within a few minutes, please check your spam folder or contact our support team for further assistance.</p>

                    </div>  
                </div>
            </div>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default ResetPasswordLink