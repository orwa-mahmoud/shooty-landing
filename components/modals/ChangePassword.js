import React, { useState } from 'react'
import Image from 'next/image'
import Modal from 'react-bootstrap/Modal';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../../store/actions';
import {useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import axios from "axios";

function ChangePassword() {

    const {register, formState: { errors },setError,reset,getValues, handleSubmit} = useForm();

    const showChangePasswordModal = useSelector((state) => state.showHideModal.showChangePasswordModal)
    const changePasswordData = useSelector((state) => state.auth.changePasswordData)
    const [loginError, setLoginError] = useState('')
    const dispatch =useDispatch()

    const [ isSubmitting,setIsSubmitting ] = useState(false)

    const closeModal = (e) => {
        //e.preventDefault();
        reset({
          "password":"",
          "repeatPassword":""
        });
        //dispatch(allActions.authActions.setChangePasswordData([]))
        dispatch(allActions.showHideModalActions.hideChangePasswordModal())

      }

      const saveFormData = async (data) => {
        data.email = changePasswordData.email
        data.token = changePasswordData.token
        console.log(' saveFormData :',data)
        setIsSubmitting(true)
        await changePassword(data);
        setIsSubmitting(false)    
      }
      const changePassword = async (data) => {
          setIsSubmitting(true)
          await axios.post("/api/auth/changePassword",
          data,
            {
              headers: {'Content-Type': 'application/json'}, 
              withCredentials : true
            }
          ).then(function (response) {
            console.log(' response :',response)
            setIsSubmitting(false)
            setLoginError(response.message)
            setError('email', { message: response.message?.email })
            setError('password', { message: response.message?.password })
            setError('repeatPassword', { message: response.message?.repeatPassword })
          }).catch(function (error) {
            setIsSubmitting(false)
          })
      }

      
  return (
    <>

      <Modal show={showChangePasswordModal} onHide={closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter"centered>

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
                            <h4 className="p-2">Change Password?</h4>
                            <p className="text-danger">{loginError} </p>
                            <form onSubmit={handleSubmit(data => {saveFormData(data)})}>
                                <div className="p-2 form-group ">
                                    <label htmlFor="password" className="mb-2" style={{color:"#666666"}}> PASSWORD (*)</label>
                                    <input type="password" className="form-control input-background"  name="password" id="password" placeholder="Password" {...register("password", {required: 'Password is required',minLength: { value: 8, message: 'Length must be 8 or more', },maxLength: { value: 20, message: 'Length must be 20 or less', }})}/>
                                    <ErrorMessage
                                        errors={errors}
                                        name="password"
                                        render={({ message }) => <p className="text-danger">{message} </p>}
                                    />
                                </div>
                                <div className="p-2 form-group mb-4">
                                      <label htmlFor="repeatPassword" className="mb-2" style={{color:"#666666"}}> REPEAT PASSWORD (*)</label>
                                      <input type="password" className="form-control input-background"  name="repeatPassword" id="repeatPassword" placeholder=" Repeat Password" {...register("repeatPassword", {required: "Password is required",validate: (val) => {
                                              const { password } = getValues();
                                              return password === val || "Repeated Password should match Password!";
                                          },})}/>
                                      <ErrorMessage
                                          errors={errors}
                                          name="repeatPassword"
                                          render={({ message }) => <p className="text-danger">{message} </p>}
                                      />
                                </div>

                                <div className="p-2 form-group mb-4">
                                        <button type="submit"  className="btn btn-block bg-dark rounded-4 w-100 text-white p-2" href="#verifyEmailModal" data-bs-toggle="modal"  disabled={isSubmitting}>
                                            {isSubmitting && (
                                            <div className="spinner-border spinner-border-sm mr-5" role="status"> </div>
                                            )} Save
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

export default ChangePassword