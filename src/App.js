import "./App.css";
import { Route, Routes } from "react-router";
import React from "react";
import AuthProtected from "./pages/Common/AuthProtected";
import NonProtected from "./pages/Common/NonProtected";

import { authProtectedRoutes, publicRoutes } from "./routes/index";

function App() {
  return (
    <>
      {/* <Routes>
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
      </Routes> */}

      <Routes>
        {authProtectedRoutes.map((route, key) => (
          <Route
          path={route.path}
          element={
            <AuthProtected>
              {route.component}
            </AuthProtected>}
          key={key}
          exact={true}
        />
        ))}

        {publicRoutes.map((route, key) => (
          <Route
          path={route.path}
          element={
            <NonProtected>
              {route.component}
            </NonProtected>
          }
          key={key}
          exact={true}
        />
        ))}
      </Routes>
    </>
  );
}

export default App;
