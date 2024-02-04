import "./App.css";
import { Route, Routes } from "react-router";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Authentication/Login";
import React from "react";
import Register from "./pages/Authentication/Register";
import AuthProtected from "./pages/Common/AuthProtected";
import Users from "./pages/Configuration/Users/Users";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={
          localStorage.getItem("token") ? 
          <AuthProtected>
            <Profile/>
          </AuthProtected>
          :
          <Login />
        }></Route>
        <Route path="/users" element={
          localStorage.getItem("token") ? 
          <AuthProtected>
            <Users/>
          </AuthProtected>
          :
          <Login />
        }></Route>
        <Route
          path="/profile"
          element={
            <AuthProtected>
              <Profile />
            </AuthProtected>
          }
        ></Route>
        <Route path={"/register"} element={<Register />} />
      </Routes>

    </>
  );
}

export default App;
