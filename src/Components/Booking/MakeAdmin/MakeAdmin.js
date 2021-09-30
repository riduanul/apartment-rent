import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useAuth } from "../../../Context/AuthContext";
import "./MakeAdmin.css";

export default function MakeAdmin() {
  const { currentUser } = useAuth();
  const user = currentUser;
  const [admin, setAdmin] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://apartment-hunt-server1.herokuapp.com/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(admin),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Admin Added Sucessfully !");
      });
  };

  return (
    <div className="admin row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-8">
        <div className="rent-header">
          <div>
            <h4>Make Admin</h4>
          </div>
          <div>
            {currentUser && (
              <div className="d-flex align-items-center ml-2">
                <img className="photoURL" src={user.photoURL} alt="" />{" "}
                <h6>{currentUser.displayName}</h6>
              </div>
            )}
          </div>
        </div>
        <div className="rent-list text-center ">
          <h3 style={{ marginTop: "50px" }}>Make Admin</h3>
          <div>
            <form action="" onSubmit={handleSubmit}>
              <input
                className="adminInput"
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => setAdmin({ ...admin, name: e.target.value })}
              />
              <br />
              <input
                className="adminInput"
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
              />
              <br /> <br />
              <input
                className="btn btn-success"
                type="submit"
                value="Add Admin"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
