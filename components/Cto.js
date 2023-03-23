import React,{ useEffect,useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import allActions from '../store/actions';
function Cto() {

    const [ctoSectionContent, setCtoSectionContent] = useState([]);
    const [mainCtoSectionContent, setMainCtoSectionContent] = useState([]);

    const getCtoSectionContent = async (data) => {

        await axios.get("/api/ctoSectionContent", data,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
        .then(async function (response) {
            setCtoSectionContent(response.data.ctoSectionContent)
            setMainCtoSectionContent(response.data.mainCtoSectionContent)
        })
        .catch(function (error) {
            console.log('items error:',error);
        })
    }

    useEffect(() => {
        getCtoSectionContent()
    },[]);


    const dispatch =useDispatch()

    const signupShowModal = (e) => {
        e.preventDefault(); 
        dispatch(allActions.showHideModalActions.showSignupModal())
    }

  return (
    <>
        <section id="cto" className="cto">
            <div className="container">
                <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                        <h1>
                            <strike>{mainCtoSectionContent.headLine}</strike>
                        </h1>
                        <h2>{mainCtoSectionContent.body}</h2>
                        <br/>
                        <a href={"#signUpModal"} data-bs-toggle="modal" className="btn-get-started"  onClick={(e) => signupShowModal(e)}>
                            <span>{mainCtoSectionContent.signupForFree}</span>
                        </a>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 text-xl-end mt-5 mt-xl-0">
                        {
                            ctoSectionContent.map((item,index) => {
                                return (
                                    <p key={index}><i  className="bi bi-check2-circle"></i>&nbsp;&nbsp;{item}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Cto