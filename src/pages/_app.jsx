import '@/styles/globals.css'
import Layout from 'components/layout'

export default function App({ Component, pageProps }) {
  return (
    <div className='m-12'>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  )
}
