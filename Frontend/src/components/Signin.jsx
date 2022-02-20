import React from "react";
import { Link, useNavigate } from "react-router-dom";
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

function Login() {
  const [userData, setUserData] = React.useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
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
export default signin;
