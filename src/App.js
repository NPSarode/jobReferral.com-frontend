import { Navbar } from "./pages/Common/Navbar";
import "./App.css";
import { Route, Routes } from "react-router";
import Profile from "./pages/Profile/Profile";
import Footer from "./pages/Common/Footer";
import Login from "./pages/Authentication/Login";
import { useState } from "react";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <>
      {isLogIn ?
        <Login setIsLogIn={setIsLogIn}/>
      :
        <>
          <Navbar setIsLogIn={setIsLogIn}/>

          <Routes>
            <Route path={"/"} element={<Profile />}></Route>
            <Route path={"/profile"} element={<Profile />}></Route>
          </Routes>

          <Footer title={"Nikhil Sarode"} tech={"MERN"} />
        </>
      }
    </>
  );
}

export default App;
