/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";
import logo from "../../../logos/Logo.png";

export default function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">
            <img src={logo} alt="" height="50" width="100%" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link active" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  Service
                </a>
              </li>

              <li className="nav-item">
                <Link to="/bookinglist">
                  <a className="nav-link" href="#">
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  Contact
                </a>
              </li>
            </ul>
            {currentUser && (
              <span style={{ padding: "5px" }}>{currentUser.displayName}</span>
            )}
            {currentUser ? (
              <Link to="/">
                <button
                  onClick={logout}
                  className="btn btn-outline-success"
                  type="submit"
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="login">
                <button className="btn btn-outline-success" type="submit">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
