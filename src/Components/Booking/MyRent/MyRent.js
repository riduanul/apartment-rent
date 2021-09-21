import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./MyRent.css";

export default function MyRent() {
  return (
    <div className="row">
        <div className="col-md-2 bar">
            <Sidebar/>
        </div>
        <div className="myrent col-md-8">
      <div className="rent-header">
        <div>
          <h4>My Rent</h4>
        </div>
        <div>
          <h6>Riduan</h6>
        </div>
      </div>
      <div className="rent-list">
        <table>
          <tr >
            <th>House Name</th>
            <th>Price</th>
            <th>Action</th>
            </tr>
          <tr >
            <td>Washington Avanue</td>
            <td>$190</td>
            <td>
                     <select name='actions'>
                     <option style={{backgroundColor:"red"}}>Pending</option>
                     <option style={{backgroundColor:"yellow"}}>Ongoiong</option>
                     <option style={{backgroundColor:"green"}}>Done</option>
                     </select> 
                </td>
           </tr>
          </table>
      </div>
    </div>
    </div>
  );
}
