
import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';


const Sidebar = () => {
  return (
        <div className="text-center mt-3">
              <img src={require('../Image/Book.jpg')} className="my-img" alt="We're learning"/>
            
                <li className="mt-4">
                  <Link className="link" to="/Letters">Letters</Link>
                </li>
                <br/>
                <li>
                  <Link className="link" to="/">Nouns</Link>
                </li>
                <br/>
                <li>
                  <Link className="link" to="/">Verbs</Link>
                </li>
                   
         </div>

  );
};

export default Sidebar;
