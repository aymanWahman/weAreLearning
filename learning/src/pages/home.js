import Header from "../Component/Header";
import { useNavigate } from "react-router-dom";
import Penguin from "../Component/Penguin";

import Footer from "../Component/Footer";

const Home = () => {
  const navigate = useNavigate();

  
  return (
    <>
      <Header />

        <div className="row section">  
          <div className="col text-center ">
            <h3 className="btn btn-secondary mode main-link m-5 p-2 fs-1" onClick={() => navigate("/Life")}>هو احنا ليه بنتعلم ؟</h3>
          </div>
        </div>

        <div className="row section">

         <div className="col-5 text-center">
            <p className="m-5 p-4 fs-2 p">سؤال والاجابة عليه حياة</p>
         </div>
        
         <div className="col-5">
            <Penguin />
         </div>
        
        </div>
    
      <Footer />
    </>
  );
};

export default Home;
