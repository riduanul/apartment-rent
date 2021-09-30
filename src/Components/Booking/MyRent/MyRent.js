import React, { useEffect, useState } from "react";
import { useAuth } from "../../../Context/AuthContext";
import Sidebar from "../Sidebar/Sidebar";
import "./MyRent.css";

export default function MyRent() {
  const { currentUser } = useAuth();
  const user = currentUser;
  const { email } = currentUser;
  const [userRent, setUserRent] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("https://apartment-hunt-server1.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setUserRent(data);
          setLoading(false);
        } else {
          setError("Somethis is wrong");
        }
      });
  }, []);

  return (
    <div className="row">
      <div className="col-md-2 bar">
        <Sidebar />
      </div>
      <div className="myrent col-md-8">
        <div className="rent-header">
          <div>
            <h4>My Rent</h4>
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
        <div className="rent-list">
          <table>
            <tr>
              <th>House Name</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            {loading && (
              <p
                style={{
                  color: "green",
                  textAlign: "center",
                  marginTop: "30px",
                }}
              >
                Loading.......
              </p>
            )}
            {error && { error }}
            {userRent &&
              userRent
                .filter((loggedInUser) => loggedInUser.email === email)
                .map((loggedInUser) => (
                  <tbody>
                    <tr>
                      <td>{loggedInUser.title}</td>
                      <td>{loggedInUser.price}</td>
                      <td>
                        <select name="actions">
                          <option style={{ backgroundColor: "red" }}>
                            Pending
                          </option>
                          <option style={{ backgroundColor: "yellow" }}>
                            Ongoiong
                          </option>
                          <option style={{ backgroundColor: "green" }}>
                            Done
                          </option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                ))}
          </table>
        </div>
      </div>
    </div>
  );
}
