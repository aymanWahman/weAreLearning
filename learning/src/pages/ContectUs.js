

import Header from '../Component/Header';
import { Link } from 'react-router-dom';
import Footer from '../Component/Footer';


const ContectUs = () => {
  return (
    <>
    <Header />
    
    <div>
        <h1 className='text-center m-3'>بنتعلم</h1>
        
          <div className="section bg-secondary border border-dark">
            <img className="my-img "  src={require('../Image/moonDark.jpg')} alt="We're learning"/>
            
          </div>
          <h4 className='text-center'>Ayman Aly</h4>
          <div className='section bg-secondary border border-dark'>
          <Link id="you" className="youtube" to="https://www.youtube.com/channel/UCGmWm5dvozP_VzJXT16Llxg/featured"> youtube </Link>
          <Link className="facebook" to="https://www.facebook.com/me/"> facebook </Link>
          </div>
      </div> 
      <br/> 
      <p>اللهم ارزقنا من فضلك العظيم في الدنيا والأخرة</p>
      <br/>
    <Footer />
  </>
  );
}

export default ContectUs;
