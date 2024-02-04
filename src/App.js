import { Navbar } from "./pages/Common/Navbar"
import "./App.css"
import { Route, Routes } from "react-router"
import Profile from "./pages/Profile/Profile"
import Footer from "./pages/Common/Footer"
import Login from "./pages/Authentication/Login"
import { useState } from "react"
import React from "react"

function App() {
  const [isLogIn, setIsLogIn] = useState(true)
  return (
    <>
      {isLogIn ? (
        <Login setIsLogIn={setIsLogIn} isLogIn={isLogIn} />
      ) : (
        <>
          <Navbar setIsLogIn={setIsLogIn} />

          <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"/profile"} element={<Profile />} />
          </Routes>

          <Footer title={"Nikhil Sarode"} tech={"MERN"} />
        </>
      )}
    </>
  )
}

export default App
