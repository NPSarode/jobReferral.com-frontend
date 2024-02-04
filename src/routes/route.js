import React from "react";
import { Navigate } from "react-router-dom";

const Authmiddleware = (props) => {
  console.log(props)
  if (!localStorage.getItem("authUser")) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
  return (<React.Fragment>
    {console.log(props.children)}
    {props.children}
  </React.Fragment>);
};

export default Authmiddleware;
