import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
  <div>
    <Head>
      <title>CoinPrice</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
    </Head>
    <Navbar />
    <div className="container">
      {props.children} //page loads here
    </div>
  </div>
)

export default Layout
