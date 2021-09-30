import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./BookingList.css";
import { useAuth } from "../../../Context/AuthContext";

export default function BookingList() {
  const [bookings, setBookings] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setBookings(data);
          setLoading(false);
        } else {
          setError("Something is wrong");
        }
      });
  }, []);
  const { currentUser } = useAuth();
  const user = currentUser;
  return (
    <div className="row">
      <div className="col-md-2 bar">
        <Sidebar />
      </div>
      <div className="bookinglist col-md-8">
        <div className="booking-header">
          <div>
            <h4>Booking List</h4>
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
        <div className="list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Id</th>
                <th>Phone No</th>
                <th>Apartment</th>
                <th>Status</th>
              </tr>
            </thead>
            {error && <p>{error.massage}</p>}
            {loading && (
              <p
                style={{
                  textAlign: "center",
                  color: "green",
                  marginTop: "30px",
                }}
              >
                Loading...... .
              </p>
            )}
            {bookings &&
              bookings.map((booking) => (
                <tbody key={booking._id}>
                  <tr>
                    <td style={{ width: "25%" }}>{booking.name}</td>
                    <td style={{ width: "18%" }}>{booking.email}</td>
                    <td style={{ width: "12%" }}>{booking.phone}</td>
                    <td style={{ width: "25%" }}>{booking.title}</td>
                    <td style={{ width: "8%" }}>
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
