import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [userData, setUserData] = React.useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2345/login", userData)
      .then((response) => {
        alert("Verified Successfully!");
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      })
      .catch((e) => alert("please provide a valid details"));
  };
  return (
    <div className="login-form">
      <h1>Login here!</h1>
      <form>
        <input
          onChange={handleChange}
          label="Email"
          name="email"
          placeholder="Please Enter your email!"
        ></input>

        <input
          label="Password"
          name="password"
          onChange={handleChange}
          placeholder="Enter your password!"
          
        ></input>

        <button onClick={handleClick} type="primary" >
          Login
        </button>
        <div>
          <span >Create an account ! </span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
