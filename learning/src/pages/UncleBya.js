
import Header from '../Component/Header';

import Footer from '../Component/Footer';



const UncleBya = () => {
  return (
    <>
    <Header title=" with Uncle Bya" />
    
    <div>
      
          <h1 className='section bg-secondary text-white'>
          <img className="my-img me-5" src={require('../Image/UncleBya.jpg')} alt="We're learning"/>
          <br/>تتكون الجملة من كلمتين أو أكثر بشرط أن تعطي معنى تام</h1>
          <br/>
          <h2 className="section justify-content-center fs-1 fw-bold p-3"> رحلة الكلمة</h2>
          
          <br/>
          <div className="section flex-row-reverse p-3">
          <div className="section btn m-2">
            <h4>الاسم كلمة</h4>
            </div>
            <div className="section btn m-2">
            <h4>الفعل كلمة</h4>
            </div>
            <div className="section btn m-2">
            <h4>الحرف كلمة</h4>
            </div>
          </div>
      </div>   
      <br/>
    <Footer />
  </>
  );
}

export default UncleBya;
