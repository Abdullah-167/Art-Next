import "../styles/globals.css";
import Layout from "./../components/Layout.jsx";
import "keen-slider/keen-slider.min.css"
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
