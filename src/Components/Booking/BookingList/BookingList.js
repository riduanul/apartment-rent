import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./BookingList.css";

export default function BookingList() {
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
            <h6>Riduan</h6>
          </div>
        </div>
        <div className="list">
          <table>
            <tr>
              <th>Name</th>
              <th>Email Id</th>
              <th>Phone No</th>
              <th>Apartment</th>
              <th>Status</th>
            </tr>
            <tr>
              <td style={{ width: "25%" }}>Riduanul Haqeu</td>
              <td style={{ width: "18%" }}>riduanul.haque1@gmail.com</td>
              <td style={{ width: "12%" }}>01794212131</td>
              <td style={{ width: "25%" }}>Washington Villa</td>
              <td style={{ width: "8%" }}>
                <select name="actions">
                  <option style={{ backgroundColor: "red" }}>Pending</option>
                  <option style={{ backgroundColor: "yellow" }}>
                    Ongoiong
                  </option>
                  <option style={{ backgroundColor: "green" }}>Done</option>
                </select>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
