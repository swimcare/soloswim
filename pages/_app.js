import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
