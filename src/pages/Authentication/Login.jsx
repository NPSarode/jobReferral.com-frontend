import React from "react";
import { Container } from "reactstrap";

const Login = ({ setIsLogIn }) => {
  return (
    <div className="myForm d-flex justify-content-center align-items-center">
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <button
          type="button"
          class="btn btn-info"
          onClick={() => {
            setIsLogIn(false);
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
