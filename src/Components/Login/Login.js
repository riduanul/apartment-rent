/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Login.css";
import Navbar from "../Home/Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import googleLogo from "../../logos/google.png";
import fbLogo from "../../logos/fb.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const { login, googleLogin, facebookLogin } = useAuth();
  const history = useHistory();

  const handleGoogle = () => {
    googleLogin();
    history.push("/");
  };
  const handleFacebook = () => {
    facebookLogin();
    history.push("/");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(email, password);
      history.push("/");
    } catch (err) {
      console.log(err);
      setError("Failed to Login!");
    }
  }

  return (
    <div>
      <>
        <Navbar />
      </>
      <div className="login">
        <h4>Login</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="check">
            <div>
              <input type="checkbox" name="checkbox" />
            </div>
            <div>
              <a href="#">Forgot Password</a>
            </div>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <span>
          Don't have an account?{" "}
          <Link to="/createAccount">
            <a href="#">Create an account</a>
          </Link>
        </span>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
      <div className="extarnal-login">
        <div className="google-login" onClick={handleGoogle}>
          <span>
            <img src={googleLogo} alt="" width="30" />
          </span>
          <button className="ext-btn-1">Continute with Google</button> <br />
        </div>
        <div className="fb-login" onClick={handleFacebook}>
          <span>
            <img src={fbLogo} alt="" width="30" />
          </span>
          <button className="ext-btn">Continute with Facebook</button>
        </div>
      </div>
    </div>
  );
}
