import Layout from '../components/Layout'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Head>
        <title>WebDev News</title>
        <meta name='keyword' content='web development, programming' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </Layout>
  )
}

export default MyApp
