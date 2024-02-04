import React from "react"
import { Button, Form, FormFeedback, Input, Label } from "reactstrap"
import axios from "axios"

import * as Yup from "yup"
import { useFormik } from "formik"
import { Link } from "react-router-dom"

const Login = ({ setIsLogIn, isLogIn }) => {
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your Username"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: values => {
      axios
        .post(`http://localhost:5000/login`, values, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then(response => response.data)
        .catch(err => alert(err))
        .then(data => {})
      validation.resetForm()
    },
  })

  console.log(`${process.env.REACT_APP_API_ENDPOINT}/login`)

  return (
    <div className="myForm d-flex justify-content-center align-items-center flex-column">
      <Form
        onSubmit={e => {
          e.preventDefault()
          validation.submitForm()
          return false
        }}
      >

        <div className="form-group">
          <Label for="username">Username</Label>
          <Input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter email"
            onChange={validation.handleChange}
            onBlur={validation.handleBlur}
            value={validation.values.username || ""}
            invalid={
              validation.touched.username && validation.errors.username
                ? true
                : false
            }
          />
          {validation.touched.username && validation.errors.username ? (
            <FormFeedback type="invalid">
              {validation.errors.username}
            </FormFeedback>
          ) : null}
        </div>
        <div className="form-group">
          <Label for="password">Password</Label>
          <Input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={validation.handleChange}
            onBlur={validation.handleBlur}
            value={validation.values.password || ""}
            invalid={
              validation.touched.password && validation.errors.password
                ? true
                : false
            }
          />
          {validation.touched.password && validation.errors.password ? (
            <FormFeedback type="invalid">
              {validation.errors.password}
            </FormFeedback>
          ) : null}
        </div>
        <Button color="info">Log In</Button>
        
      </Form>
      <div className="mt-2 text-center">
        <p>
          Don&#39;t have an account ?{" "}
          <Link to="/register" className="fw-medium text-primary">
            {" "}
            Signup now{" "}
          </Link>{" "}
        </p>
      </div>
      
    </div>
  )
}

export default Login
