import React from "react";
import { Navigate } from "react-router-dom";

// Protected
import Profile from "../pages/Profile/Profile";
import Summary from "../pages/JobSummary/Summary";

// Public
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";


const authProtectedRoutes = [
  { path: "/profile", component: <Profile /> },
  { path: "/joblist", component: <Summary /> },
  

  {
    path: "/",
    exact: true,
    component: < Navigate to="/joblist" />,
  },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },
  // {
  //   path: "/",
  //   exact: true,
  //   component: < Navigate to="/login" />,
  // },
  
];

export { authProtectedRoutes, publicRoutes };
