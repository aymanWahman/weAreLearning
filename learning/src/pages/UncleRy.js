
import Header from '../Component/Header';

import Footer from '../Component/Footer';
import { useNavigate } from "react-router-dom";
const UncleRy = () => {
  const navigate = useNavigate();
  return (
    <>
    <Header title=" with Uncle Ry"/>
    <div className='section bg-secondary'>
    <h2>
    <img className="my-img m-4"  src={require('../Image/uncleRyImg.jpg')} alt="We're learning"/>
    Computer science is ploblem solving</h2>
    </div>
    
    <div className='section justify-content-between'>
    <button onClick={() => navigate("/Hardware")} className='btn btn-secondary m-2 section main-link mode p-3'>Hardware</button>
    
    <button onClick={() => navigate("/Software")} className='btn btn-secondary m-2 section main-link mode p-3'>Software</button>
    </div>
    <br/>
    <div className='section'>
      <h2>السوفت وير مرتبط جدا بتطور الهاردوير</h2>
    </div>
    <Footer />
  </>
  );
}

export default UncleRy;
