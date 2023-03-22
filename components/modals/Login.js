import React, {useState} from 'react'
import Image from 'next/image'
import Modal from 'react-bootstrap/Modal';
import {useSelector, useDispatch} from 'react-redux';
import allActions from '../../store/actions';
import {useForm} from "react-hook-form";
import {ErrorMessage} from '@hookform/error-message';
import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;

function Login() {

    const {register, formState: {errors}, reset, getValues, handleSubmit} = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loginError, setLoginError] = useState('')


    const showLoginModal = useSelector((state) => state.showHideModal.showLoginModal)
    const dispatch = useDispatch()

    const closeModal = (e) => {
        //e.preventDefault();
        setLoginError('')
        reset({
            "email": "",
            "password": "",
        });
        dispatch(allActions.showHideModalActions.hideLoginModal())
    }

    const openSignupModal = (e) => {
        // e.preventDefault();
        dispatch(allActions.showHideModalActions.hideLoginModal())
        dispatch(allActions.showHideModalActions.showSignupModal())
    }

    const openForgetEmailModal = (e) => {
        //e.preventDefault();
        dispatch(allActions.showHideModalActions.hideLoginModal())
        dispatch(allActions.showHideModalActions.showForgotEmailModal())
    }

    const saveFormData = async (data) => {
        setIsSubmitting(true)
        login(data);
        setIsSubmitting(false)

    }
    const login = async (data) => {


        await axios.post("/api/auth/login", data,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        ).then(async function (response) {

          console.log(response.data);
            const res = response.data;

            const setCookieArray = res.authCookie;
            if (setCookieArray && setCookieArray.length > 0) {
                const cookieParts = setCookieArray[0].split(";").map((part) => part.trim());
                const cookieKeyValue = cookieParts[0].split("=");
                const cookieKey = cookieKeyValue[0];
                const cookieValue = cookieKeyValue[1];
                const domain = cookieParts.find((part) => part.startsWith("Domain=")).split("=")[1];
                const path = cookieParts.find((part) => part.startsWith("Path=")).split("=")[1];
                const sameSite = cookieParts.find((part) => part.startsWith("SameSite=")).split("=")[1];
                Cookies.set(cookieKey, cookieValue, {
                    domain: domain,
                    path: path,
                });
            }
            if(res.user){
              window.location.href = process.env.NEXT_PUBLIC_SAAS_APP_URL;
                reset({
                    "email":"",
                    "password":"",
                });
                dispatch(allActions.authActions.login(res))
                dispatch(allActions.showHideModalActions.hideLoginModal())
            }

        }).catch(function (error) {
            setLoginError(error.response.data.errorMessage)
        })

    }


    return (
        <>
            <Modal show={showLoginModal} onHide={closeModal} size="lg" aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="camera-ban col-md-4 p-0">
                                <div className="p-3">
                                    <h3 className="pt-3 text-white">Start for free.</h3>
                                    <p className="text-white ban-text-size">Nunc libero diam, pellentesque a erat at,
                                        laoreet dapibus enim. Donec risus nisi, egestas ullamcorper sem quis.</p>
                                </div>
                                <Image src="/assets/img/sd-camera.png" alt="Shooty" fill
                                       className="img-fluid custom-img"/>
                            </div>
                            <div className="col-md-8 pr-0 camera-ban-removed">
                                <div className="text-end">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close" onClick={(e) => closeModal(e)}>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <form onSubmit={handleSubmit(data => {
                                        saveFormData(data)
                                    })}>
                                        <h4>Welcome back!</h4>
                                        <p className='have-accoiunt-color'>Don&apos;t have an account? <a
                                            href="#signUpModal" data-bs-toggle="modal" className="main-color"
                                            onClick={(e) => openSignupModal(e)}>Sign Up</a></p>

                                        <p className="text-danger">{loginError} </p>

                                        <div className="form-group mb-4">
                                            <label htmlFor="email" className="mb-2 for-label-color "> EMAIL</label>
                                            <input type="text" className="form-control input-background" name="email"
                                                   id="email" placeholder="Email" {...register("email", {
                                                required: "Email is required", pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}/>
                                            <ErrorMessage
                                                errors={errors}
                                                name="email"
                                                render={({message}) => <p className="text-danger">{message} </p>}
                                            />
                                        </div>

                                        <div className="form-group mb-4">
                                            <label htmlFor="password"
                                                   className="mb-2 for-label-color "> PASSWORD</label>
                                            <input type="password" className="form-control input-background"
                                                   name="password" id="password"
                                                   placeholder="Password" {...register("password", {required: 'Password is required'})}/>
                                            <ErrorMessage
                                                errors={errors}
                                                name="password"
                                                render={({message}) => <p className="text-danger">{message} </p>}
                                            />
                                        </div>


                                        <div className="row mb-4 justify-content-between">
                                            <div className="col">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                           id="rememberMe"/>
                                                    <label className="form-check-label"
                                                           htmlFor="form2Example31"> Remember me </label>
                                                </div>
                                            </div>

                                            <div className="col text-end forgot-text-right">
                                                <a href="#forgotPasswordModal" data-bs-toggle="modal"
                                                   className="main-color" onClick={(e) => openForgetEmailModal(e)}>Forgot
                                                    password?</a>
                                            </div>
                                        </div>

                                        <div className="form-group mb-4">
                                            <button type="submit"
                                                    className="btn btn-block bg-dark rounded-4 w-100 text-white p-2"
                                                    href="#verifyEmailModal" data-bs-toggle="modal"
                                                    disabled={isSubmitting}>
                                                {isSubmitting && (
                                                    <div className="spinner-border spinner-border-sm mr-5"
                                                         role="status"></div>
                                                )} LOGIN
                                            </button>
                                        </div>

                                        <div>
                                            <p>Or Login with</p>
                                            <div className="btn-group d-flex flex-wrap" role="group">
                                                <a href="#"
                                                   className="btn btn-google border rounded-2 m-b-20 me-2 mb-2">
                                                    <Image src="/assets/img/icon-google.png" alt="GOOGLE" fill
                                                           className="img-fluid custom-img width-20 "/>
                                                    {' '} Google
                                                </a>
                                                <a href="#" className="btn btn-face border rounded-2 m-b-20 me-2 mb-2">
                                                    <Image src="/assets/img/icon-facebook.png" alt="FACEBOOK" fill
                                                           className="img-fluid custom-img width-20"/>
                                                    {' '} Facebook
                                                </a>
                                                <a href="#"
                                                   className="btn btn-twitter border rounded-2 m-b-20 me-2 mb-2">
                                                    <Image src="/assets/img/icon-twitter.png" alt="TWITTER" fill
                                                           className="img-fluid custom-img width-20 "/>
                                                    {' '} Twitter
                                                </a>
                                            </div>

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

export default Login