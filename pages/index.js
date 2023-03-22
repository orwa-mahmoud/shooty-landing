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
import React,{useEffect} from 'react'
import AOS from 'aos';
import Modals from '@/components/modals/Modals'
const inter = Inter({ subsets: ['latin'] })
import axios from "axios";
import Head from 'next/head'

axios.defaults.withCredentials = true

export default function Home() {

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
