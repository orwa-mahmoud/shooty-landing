import React, { useState } from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../../store/actions';

function VirifyEmail() {

  const showVirifyEmailModal = useSelector((state) => state.showHideModal.showVirifyEmailModal)
  const dispatch =useDispatch()


  const closeModal = (e) => {
    e.preventDefault(); 
    dispatch(allActions.showHideModalActions.hideVirifyEmailModal())
  }

  return (
    <>
      <Modal show={showVirifyEmailModal} onHide={closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter"centered>

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
                        <h4 className="p-2">Verify your Email</h4>
                        <p style={{color:"#666666"}}>We have sent an email to <span className="text-dark fw-bold">abcd@companyemail.com.</span> </p>
                        <p style={{color:"#666666"}}> You need to verify your email to continue. If you have not received the verification email, please check your &quot;spam&quot; or &quot;Bulk Email&quot; folder. You can also click the resend button below to have another email sent to you.</p>
                        <h6><a href="#loginModal" data-bs-toggle="modal" className="main-color">Resend verification Email</a></h6>
                    </div>  
                </div>
            </div>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default VirifyEmail