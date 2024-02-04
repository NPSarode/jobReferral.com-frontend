import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const Navbar = ({setIsLogIn}) => {
  return (
    <div className="navbar shadow">
      <div className="text-center">
        <img src={logo} className="rounded mx-5" alt="..." />
      </div>
      <ul className="text-white mb-0">
        <Link to={"/profile"}>
          <li className="text-white">Profile</li>
        </Link>
        <Link 
        to={"/logout"}
        onClick={() => {
          setIsLogIn(true)
        }} 
        >
          <li className="text-white">Log Out</li>
        </Link>
      </ul>
    </div>
  );
};
