import "./App.css";
import { Route, Routes } from "react-router";
import React from "react";
import AuthProtected from "./pages/Common/AuthProtected";
import NonProtected from "./pages/Common/NonProtected";

import { authProtectedRoutes, publicRoutes } from "./routes/index";

function App() {
  return (
    <>

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
