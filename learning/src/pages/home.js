import Header from "../Component/Header";
import { useNavigate } from "react-router-dom";
import Penguin from "../Component/Penguin";

import Footer from "../Component/Footer";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [showAnswer, setShowAnswer] = useState(false);


  const handleShow = (e) => {
    e.preventDefault()
    setShowAnswer(!showAnswer);
  }
  
  return (
    <>
      <Header />
      
        <div className="row section">  
          <div className="col text-center ">
            
            <h3 className="btn btn-secondary rounded-pill p-2 fs-1 ani" onClick={handleShow}>هو احنا ليه بنتعلم ؟</h3>
          </div>
        </div>

      <div className="row section">
          {showAnswer && (
        <div className="col-5 text-center">
            <p className="btn btn-secondary mode main-link m-5 p-2 fs-1" onClick={() => navigate("/Life")} >الإجابة هي الحياة</p>
        </div>
      )}
                
         <div className="col-2">
            <Penguin />
         </div>
     </div>
    
      <Footer />
    </>
  );
};

export default Home;

