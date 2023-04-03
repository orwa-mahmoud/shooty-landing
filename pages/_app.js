import '@/styles/globals.css'
// import '@/styles/bootstrap.css'
import '@/styles/bootstrap-icons.css'
import '@/styles/swiffy-slider.min.css'
import 'aos/dist/aos.css';
import { store } from "@/store/store";
import { Provider } from "react-redux";
import App from 'next/app';
import axios from "axios";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const  req  = ctx.req;
    const cookies = req.headers.cookie;
    let condition = false;
    // Make an API call to fetch the user profile    
     await axios.get(process.env.NEXT_PUBLIC_API_URL + '/auth/profile',
       {
        headers: {'Content-Type': 'application/json', 'Cookie': cookies},
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
    if (condition === true) {
      if (typeof window !== 'undefined') {
        window.location.href = process.env.NEXT_PUBLIC_SAAS_APP_URL;
      } else {
         ctx.res.writeHead(302, { Location: process.env.NEXT_PUBLIC_SAAS_APP_URL });
         ctx.res.end();
       }
    }
    // Fetch initial props for the component
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    // Return the initial props for the component
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}
export default MyApp;

