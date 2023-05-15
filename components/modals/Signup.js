import React,{useState,useEffect,useCallback} from 'react'
import Image from 'next/image'
import Modal from 'react-bootstrap/Modal';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../../store/actions';
import {useForm} from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;

function Signup() {

  const {register, formState: { errors },setError,reset,getValues,setValue, handleSubmit} = useForm();
  const [readConditionChekced,setReadConditionChekced] = useState(true)
  const [ isSubmitting,setIsSubmitting ] = useState(false)

  const handleSetAcceptInvitationData = useCallback((data) => {
    console.log('data',data)
    setValue('first_name',data.user.first_name);
    setValue('last_name', data.user.last_name);
    setValue('email', data.user.email);
  }, [setValue]);

  const handleChange = () => { 
    setReadConditionChekced(!readConditionChekced)
  };
  

  const showSignupModal = useSelector((state) => state.showHideModal.showSignupModal)
  const acceptInvitationData = useSelector((state) => state.auth.acceptInvitationData)
  const dispatch =useDispatch()


  const closeModal = (e) => {
   // e.preventDefault(); 
    reset({
            "first_name":"",
            "last_name":"",
            "type":"",
            "email":"",
            "password":"",
            "repeatPassword":""
        });
        dispatch(allActions.showHideModalActions.hideSignupModal())
  }

  const openLoginModal = (e) => {
    //e.preventDefault(); 
    dispatch(allActions.showHideModalActions.hideSignupModal())
    dispatch(allActions.showHideModalActions.showLoginModal())
  }

  const openVirifyEmailModal = (e) => {
    //e.preventDefault(); 
    dispatch(allActions.showHideModalActions.hideSignupModal())
    dispatch(allActions.showHideModalActions.showVirifyEmailModal())
  }

  const saveFormData = async (data) => {
    setIsSubmitting(true)
    if(acceptInvitationData.user && acceptInvitationData.workspace && acceptInvitationData.token){
        const formData = {
            data: data,
            workspace:acceptInvitationData.workspace,
            token:acceptInvitationData.token
        }
        signupAndAcceptInvitation(formData)
    }else{
        signup(data);
    }
    setIsSubmitting(false)
  }
  const signup = async (data) => {


    await axios.post("/api/auth/signup", data,
        {
        headers: {'Content-Type': 'application/json'}, 
        withCredentials : true
        }
    ).then(function (response) {
        const res = response.data;
        if(res.user){
            reset({
                "first_name":"",
                "last_name":"",
                "type":"",
                "email":"",
                "password":"",
                "repeatPassword":""
            });
            dispatch(allActions.authActions.register(res))
            dispatch(allActions.showHideModalActions.hideSignupModal())
            dispatch(allActions.showHideModalActions.showVirifyEmailModal())  
        } 
        
    }).catch(function (error) {
        console.log( 'errorn : ',error.response.data.errorMessage)
        setError('first_name', { message: error.response.data.errorMessage?.first_name })
        setError('last_name', { message: error.response.data.errorMessage?.last_name })
        setError('type', { message: error.response.data.errorMessage?.type })
        setError('email', { message: error.response.data.errorMessage?.email })
        setError('password', { message: error.response.data.errorMessage?.password })
        setError('repeatPassword', { message: error.response.data.errorMessage?.repeatPassword })
        // console.log(error.config);
     
    })
 
   }


   const signupAndAcceptInvitation = async (data) => {

    let rememberMe =  data.rememberMe;
    delete data['rememberMe'];
    await axios.post("/api/auth/acceptInvitationWithSignup", data,
        {
        headers: {'Content-Type': 'application/json'}, 
        withCredentials : true
        }
    ).then(function (response) {
        const res = response.data;
        if(res.user){          
            const setCookieArray = res.authCookie;
            if (setCookieArray && setCookieArray.length > 0) {
                const cookieParts = setCookieArray[0].split(";").map((part) => part.trim());
                const cookieKeyValue = cookieParts[0].split("=");
                const cookieKey = cookieKeyValue[0];
                const cookieValue = cookieKeyValue[1];
                const domain = cookieParts.find((part) => part.startsWith("Domain=")).split("=")[1];
                const path = cookieParts.find((part) => part.startsWith("Path=")).split("=")[1];
                const sameSite = cookieParts.find((part) => part.startsWith("SameSite=")).split("=")[1];
                const expirationDateValue = cookieParts.find((part) => part.startsWith("Expires=")).split("=")[1];
                const expirationDate = new Date(Date.parse(expirationDateValue))
                Cookies.set(cookieKey, cookieValue, {
                    domain: domain,
                    path: path,
                    expires: rememberMe?expirationDate:undefined,
                });
            }
            const params = (acceptInvitationData?.user ? '?workspace='+acceptInvitationData?.workspace + '&token='+acceptInvitationData?.token : '')
            dispatch(allActions.authActions.setAcceptInvitationData({user:[],workspace:null,toke:''}))
            window.location.href = process.env.NEXT_PUBLIC_SAAS_APP_URL
        } 
        
    }).catch(function (error) {
        console.log( 'errorn : ',error)
        setError('first_name', { message: error.response.data.errorMessage?.first_name })
        setError('last_name', { message: error.response.data.errorMessage?.last_name })
        setError('type', { message: error.response.data.errorMessage?.type })
        setError('email', { message: error.response.data.errorMessage?.email })
        setError('password', { message: error.response.data.errorMessage?.password })
        setError('repeatPassword', { message: error.response.data.errorMessage?.repeatPassword })
     
    })
 
   }

   useEffect(() => {
    handleSetAcceptInvitationData(acceptInvitationData)
  }, [handleSetAcceptInvitationData,acceptInvitationData])
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
                    <div className="col-md-8 pr-0 camera-ban-removed">
                        <div className="text-end">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"  onClick={(e) => closeModal(e)}>
                            </button>
                        </div>
                        <div className="p-5 pt-1 pb-2">
                            <form onSubmit={handleSubmit(data => {saveFormData(data)})}>
                                <h4>Create New Account</h4>
                                {acceptInvitationData.user 
                                ?  <p style={{color:"#A3A3A3"}}>Sign up to accept the invitation</p>
                                : <p style={{color:"#A3A3A3"}}>Already have an account? <a href="#loginModal" data-bs-toggle="modal" className="main-color"  onClick={(e) => openLoginModal(e)}>Login</a> </p>
                                }

                                <div className="form-group mb-4">
                                    <label htmlFor="name" className="mb-2"> ARE YOU A (*)</label>
                                    <select className="form-select input-background" aria-label="Select Type" name="type" id="type" {...register("type", {required: "User type is required"})}>
                                        <option value="">Select Type</option>
                                        <option value="Studio">Studio</option>
                                        <option value="Freelancer">Freelancer</option>
                                        <option value="Photographer">Photographer</option>
                                        <option value="Other">Other</option>
                                    </select>
                                     <ErrorMessage
                                        errors={errors}
                                        name="type"
                                        render={({ message }) => <p className="text-danger">{message} </p>}
                                      />
                                </div>

                                <div className="form-group mb-4">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="username" className="mb-2" style={{color:"#666666"}}> FIRST NAME (*)</label>
                                            <input type="text" className="form-control input-background" name="first_name" id="first_name" placeholder="First Name" {...register("first_name", {required: "First name is required",minLength: { value: 3, message: 'Length must be 3 or more', }})}/>
                                            <ErrorMessage
                                                errors={errors}
                                                name="first_name"
                                                render={({ message }) => <p className="text-danger">{message} </p>}
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="name" className="mb-2" style={{color:"#666666"}}> LAST NAME (*)</label>
                                            <input type="text" className="form-control input-background" name="last_name" id="last_name" placeholder="Last Name" {...register("last_name", {required: "Last name is required",minLength: { value: 3, message: 'Length must be 3 or more', }})}/>
                                            <ErrorMessage
                                                errors={errors}
                                                name="last_name"
                                                render={({ message }) => <p className="text-danger">{message} </p>}
                                            />
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="email" className="mb-2" style={{color:"#666666"}}> EMAIL (*)</label>
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

                                <div className="form-group mb-4">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="password" className="mb-2" style={{color:"#666666"}}> PASSWORD (*)</label>
                                            <input type="password" className="form-control input-background"  name="password" id="password" placeholder="Password" {...register("password", {required: 'Password is required',minLength: { value: 8, message: 'Length must be 8 or more', },maxLength: { value: 20, message: 'Length must be 20 or less', }})}/>
                                            <ErrorMessage
                                                errors={errors}
                                                name="password"
                                                render={({ message }) => <p className="text-danger">{message} </p>}
                                            />
                                        </div>
                                        <div className="col">
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
                                    </div>
                                    
                                </div>

                                <div className="row mb-4 justify-content-between">
                                    <div className="col">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="readCondition" checked={readConditionChekced} onChange={handleChange}/>
                                        <label className="form-check-label" htmlFor="readCondition"> By clicking continue above, you acknowledge that you have read, understood and agree to our Terms & Conditions , Privacy Policy and Legal Notice!</label>
                                    </div>
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                        <button type="submit"  className="btn btn-block bg-dark rounded-4 w-100 text-white p-2" href="#verifyEmailModal" data-bs-toggle="modal"  disabled={!readConditionChekced || isSubmitting}>
                                            {isSubmitting && (
                                            <div className="spinner-border spinner-border-sm mr-5" role="status"> </div>
                                            )} SIGN UP 
                                        </button>

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

export default Signup