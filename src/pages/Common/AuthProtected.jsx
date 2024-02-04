import React from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'

const AuthProtected = (props) => {
  return (
    <>
    <Navbar/>
    <div>{props.children}</div>
    <Footer title={"Nikhil sarode"} tech={"MERN"}/>
    </>
  )
}

export default AuthProtected
