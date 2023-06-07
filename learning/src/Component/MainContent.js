import React from "react";
import "./MainContent.css";

const MainContent = ({ pageName }) => {
  return (
  <>
  {/* {pageName} */}
  
  <div className="parentG">
    <div className="sidebarG">sidebar</div>
    <div className="main">main</div>
    <div className="mainR">mainR</div>
  </div>
  </>
  );
};

export default MainContent;
