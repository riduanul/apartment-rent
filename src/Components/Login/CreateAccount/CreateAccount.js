/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./CreateAccount.css";
import Navbar from "../../Home/Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    //do validation
    if (password !== confirmPassword) {
      return setError("Password does not match!");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Faild to create an account!");
    }
  }

  return (
    <div>
      <>
        <Navbar />
      </>
      <div className="create-account">
        <h3>Create Account</h3>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="User name"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            required
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button disabled={loading} type="submit" className="login-btn">
            Create Account
          </button>
        </form>
        <Link to="/login">
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </Link>
      </div>
      <div className="fb-google">
        <button className="ad-btn">Continute with Facebook</button> <br />
        <button className="ad-btn">Continute with Google</button>
      </div>
    </div>
  );
}
