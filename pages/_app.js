import '@/styles/globals.css'
// import '@/styles/bootstrap.css'
import '@/styles/bootstrap-icons.css'
import '@/styles/swiffy-slider.min.css'
import 'aos/dist/aos.css';
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}