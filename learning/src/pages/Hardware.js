
import Header from '../Component/Header';

import Footer from '../Component/Footer';



const Hardware = () => {
  return (
    <>
    <Header />
    <div className='section'>
      <h3>الهاردوير</h3>
    <img className="my-img  sidebar"  src={require('../Image/DSystem.jpg')} alt="We're learning"/>
    
    </div>
    <Footer />
  </>
  );
}

export default Hardware;
