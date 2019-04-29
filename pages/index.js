import Fetch from 'isomorphic-unfetch';
import Navbar from '../components/Layout';
import Prices from '../components/Prices';

const Index = () => (
  <Layout>
    <div>
      <Navbar/>
  	  <h1>Welcome!</h1>
      <p>Check current rate:</p>
      <Prices bpi={props.bpi}/>
      {props.time.updated} //this is from the API docs
    </div>
  </Layout>
);

Index.getinitialProps = asyn function() {
  //here comes the fetch
  const res = await fetch
  ('https://api.coindesk/com/v1/bpi/currentprice.json');
  //second await to map the result to JSON
  const data = await res.json();

  return {
    bpi: data
  };
}

export default Index;
