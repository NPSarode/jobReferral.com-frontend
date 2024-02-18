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
        .catch((err) => {})
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
    <div className="navbar shadow" style={{position:'sticky', top:'0',zIndex:'9'}}>
      <div className="text-center">
        <img src={logo} className="rounded" alt="..."  onClick={()=>{Navigate('/')}}/>
      </div>
      <ul className="text-white mb-0 parentUL">
        <Link 
        onClick={onClickLogOut} 
        >
          <i className='bx bx-log-out-circle text-white' style={
            {
              fontSize:'200%',
              transform: 'rotate(90deg)'
            }}></i>
        </Link>
      </ul>
    </div>
  );
};
