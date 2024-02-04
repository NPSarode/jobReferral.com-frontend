import React from "react";
import { Navigate } from "react-router-dom";

// Protected
import Profile from "../pages/Profile/Profile";

// Public
import Login from "../pages/Authentication/Login";


const authProtectedRoutes = [
  { path: "/profile", component: <Profile /> },
  

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: < Navigate to="/profile" />,
  },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  
];

export { authProtectedRoutes, publicRoutes };
