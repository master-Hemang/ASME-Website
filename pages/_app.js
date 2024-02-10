import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        {/* <title>ASME | IIT(ISM) Dhanbad</title> */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        {/* <script src="js/scripts.js"></script> */}
    
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    
  ); 
}

export default MyApp
