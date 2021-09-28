import React from "react";
import "./Sidebar.css";
import {
  faPlus,
  faListAlt,
  faHome,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../../../logos/Logo.png";
import { useAuth } from "../../../Context/AuthContext";

export default function Sidebar() {
  const { logout } = useAuth();
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="" width="100" />
      </Link>
      <ul>
        <Link to="/bookinglist">
          <li>
            <span>
              {" "}
              <FontAwesomeIcon icon={faListAlt} /> Booking list
            </span>
          </li>
        </Link>
        <Link to="addrent">
          <li>
            <span>
              {" "}
              <FontAwesomeIcon icon={faPlus} /> Add Rent House
            </span>
          </li>
        </Link>
        <Link to="myrent">
          <li>
            <span>
              {" "}
              <FontAwesomeIcon icon={faHome} /> My Rent
            </span>
          </li>
        </Link>
      </ul>

      <div className="logout">
        <Link to="/">
          {" "}
          <span onClick={logout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </span>
        </Link>
      </div>
    </div>
  );
}
