import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
  <div>
    <Head>
      <title>Big title</title>
      <link rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cerulean/bootstrap.min.css" />
    </Head>
    <Navbar />
    {props.children}
  </div>

)

export default Layout