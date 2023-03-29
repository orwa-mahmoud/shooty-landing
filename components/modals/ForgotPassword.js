import React, { useState } from 'react'
import Image from 'next/image'
import Modal from 'react-bootstrap/Modal';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../../store/actions';
import {useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import axios from "axios";
function ForgotPassword() {

    const {register, formState: { errors },setError,reset,getValues, handleSubmit} = useForm();

    const showForgotEmailModal = useSelector((state) => state.showHideModal.showForgotEmailModal)
    const dispatch =useDispatch()

    const [ isSubmitting,setIsSubmitting ] = useState(false)

    const closeModal = (e) => {
        //e.preventDefault();
        reset({
            "email":"",
        });
        dispatch(allActions.showHideModalActions.hideForgotEmailModal())
      }

      const saveFormData = async (data) => {
        setIsSubmitting(true)
        await resetPassword(data);
        setIsSubmitting(false)    
      }
      const resetPassword = async (data) => {
          setIsSubmitting(true)
          await axios.post("/api/auth/forgotPassword",
          data,
            {
              headers: {'Content-Type': 'application/json'}, 
              withCredentials : true
            }
          ).then(function (response) {
            setIsSubmitting(false)
            dispatch(allActions.authActions.restPasswordEmail(data.email))
            dispatch(allActions.showHideModalActions.hideForgotEmailModal())
            dispatch(allActions.showHideModalActions.showResetPasswordLinkEmailModal())
            reset({
              "email":"",
          });
          }).catch(function (error) {
            setIsSubmitting(false)
          })
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
                    <div className="col-md-8 pr-0 camera-ban-removed">
                        <div className="text-end">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => closeModal(e)}>
                            </button>
                        </div>
                        <div className="p-5  h-100" >
                            <h4 className="p-2">Forgot Password?</h4>
                            <form onSubmit={handleSubmit(data => {saveFormData(data)})}>
                                <div className="p-2 form-group mb-4">
                                    <label htmlFor="email" className="mb-2" style={{color:"#666666"}}> EMAIL</label>
                                    <input type="text" className="form-control input-background" name="email" id="email" placeholder="Email" {...register("email", {required: "Email is required",pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }})}/>
                                    <ErrorMessage
                                        errors={errors}
                                        name="email"
                                        render={({ message }) => <p className="text-danger">{message} </p>}
                                    />
                                </div>

                                <div className="p-2 form-group mb-4">
                                        <button type="submit"  className="btn btn-block bg-dark rounded-4 w-100 text-white p-2" href="#verifyEmailModal" data-bs-toggle="modal"  disabled={isSubmitting}>
                                            {isSubmitting && (
                                            <div className="spinner-border spinner-border-sm mr-5" role="status"> </div>
                                            )} FORGOT PASSWORD
                                        </button>
                                </div>
                            </form>
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