import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import '../styles/globals.css'
import Footer from "../components/Footer";
import store from "../store/store";

function MyApp({Component, pageProps}) {
    return <Provider store={store}>
        <Component {...pageProps} />
        <Footer/>
    </Provider>;
}

export default MyApp
