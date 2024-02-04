import React from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import axios from "axios";


export const Navbar = () => {

  const Navigate = useNavigate()

  const onClickLogOut = () => {
    axios
        .get(`${process.env.REACT_APP_API_ENDPOINT}/logout`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => response.data)
        .catch((err) => alert(err))
        .then((data) => {

          if( data.success ) {

            localStorage.removeItem("token")

            Navigate("/")

            withReactContent(Swal).fire({
              title: <i>Logout Successfull</i>,
              inputValue:"",
              icon:"success",
              timer:2000,
              heightAuto:false,
              showConfirmButton:false,
            })
            
          } else {

            withReactContent(Swal).fire({
              title: <i>{data.message}</i>,
              inputValue:"",
              icon:"error",
              timer:3000,
              heightAuto:false,
              showConfirmButton:false,
            })

          }

        });
  }
  return (
    <div className="navbar shadow">
      <div className="text-center">
        <img src={logo} className="rounded mx-5" alt="..." />
      </div>
      <ul className="text-white mb-0 parentUL">
        <Link to={"/profile"}>
          <li className="text-white">Profile</li>
        </Link>
        <Link 
        onClick={onClickLogOut} 
        >
          <li className="text-white">Log Out</li>
        </Link>
      </ul>
    </div>
  );
};
