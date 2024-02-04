import React from "react";
import { Navigate } from "react-router-dom";

// Protected
import Profile from "../pages/Profile/Profile";

// Public
import Login from "../pages/Authentication/Login";


const authProtectedRoutes = [
  { path: "/profile", component: <Profile /> },
  

  {
    path: "/",
    exact: true,
    component: < Navigate to="/profile" />,
  },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  {
    path: "/",
    exact: true,
    component: < Navigate to="/login" />,
  },
  
];

export { authProtectedRoutes, publicRoutes };
