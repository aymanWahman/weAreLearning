import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="logo section">
          <Link className="logo" to="/">weAreLearning</Link>
        </h1>

        <nav>
          <ul className="parent">
            <li className="mode main-link">
              <Link to="/">Home</Link>
            </li>

            <li className="mode main-link">
              <NavLink to="/UncleIsh">English</NavLink>
            </li>

            <li className="mode main-link">
              <Link to="/UncleBya"> Arbic </Link>
            </li>
            <li className="mode main-link">
              <Link to="/UncleRy">Programming</Link>
            </li>
            {/* <li className="mode main-link">
              <Link to="/Life">The life</Link>
            </li> */}
            <li className="mode main-link">
              <Link to="/ContectUs">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
