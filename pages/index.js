import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Benefits from '../components/Benefits'
import Demo from '../components/Demo'
import Testimonials from '../components/Testimonials'
import Features from '../components/Features'
import Cto from '../components/Cto'
import Footer from '../components/Footer'
import Clients from '../components/Clients'
import React,{useEffect,useCallback} from 'react'
import AOS from 'aos';
import Modals from '@/components/modals/Modals'
const inter = Inter({ subsets: ['latin'] })
import axios from "axios";
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../store/actions';

axios.defaults.withCredentials = true

export default function Home() {


  const changePasswordData   = useSelector((state) => state.auth.changePasswordData)
  const acceptInvitationData = useSelector((state) => state.auth.acceptInvitationData)
  const dispatch =useDispatch()


    const profile = useCallback(async () => {
      let condition = false;
      // Make an API call to fetch the user profile    
      await axios.get(process.env.NEXT_PUBLIC_API_URL + '/auth/profile',
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
        ).then(response => {
            if(response.data.user){
              condition = true;
            }else{
              condition = false
            }
        }).catch(error => {
          console.log('error :',error)
            condition = false
        });
      if (condition === true && (acceptInvitationData.user.length === 0 || acceptInvitationData?.user.registered ||  acceptInvitationData?.user.registered )) {
        window.location.href = process.env.NEXT_PUBLIC_SAAS_APP_URL + (acceptInvitationData?.user.registered ? '?workspace='+acceptInvitationData?.workspace + '&token='+acceptInvitationData?.token : '');
      }else{
        if(changePasswordData?.email)
        {
          console.log('changePasswordData inside: ',changePasswordData)
          dispatch(allActions.showHideModalActions.showChangePasswordModal())
        }
        console.log('acceptInvitationData inside: ',acceptInvitationData)
        if(acceptInvitationData?.user.registered === true)
        {
          console.log('acceptInvitationData inside: ',acceptInvitationData)
          dispatch(allActions.showHideModalActions.showLoginModal())
        }else if(acceptInvitationData?.user.registered === false){
          dispatch(allActions.showHideModalActions.showSignupModal())
        }
      }
    }, [acceptInvitationData,changePasswordData,dispatch]);

  useEffect(() => {
    profile()
  }, [profile])


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, [])

  return (
    <>
    <Head>
          <meta charSet='UFT-8' />
          <meta name='viewport' content="width=device-width, initial-scale=1.0" />
          <meta content="" name="title"/>
          <meta content="" name="description"/>
          <meta content="" name="keywords"/>
    </Head>
    <Layout pageTitle="Shooty">
      <Header/>
      <Hero/>
      <Clients/>
      <Benefits/>
      <Demo/>
      <Testimonials/>
      <Features/>
      <Cto/>
      <Footer/>
      <Modals/>
    </Layout>

    </>
  )
}
