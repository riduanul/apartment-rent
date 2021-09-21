import React from "react";
import "./AddRentHouse.css";
import Sidebar from "../Sidebar/Sidebar";
import uploadImage from "../../../logos/upload.png";

export default function AddRentHouse() {
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-8">
        <div className="addrent-header">
          <div>
            <h4>Add Rent House</h4>
          </div>
          <div>
            <h6>Riduan</h6>
          </div>
        </div>
        <div className="addrent">
          <form action="">
            <div className="row">
              <div className="col">
                <label>Apartment Title</label> <br />
                <input type="text" /> <br />
                <label>Location</label> <br />
                <input type="text" /> <br />
                <label>No of BathRooms</label> <br />
                <input type="text" />
              </div>
              <div className="col">
                <label>Price</label> <br />
                <input type="text" /> <br />
                <label>No of BedRooms</label> <br />
                <input type="text" /> <br />
                <label htmlFor="">image</label>
                <div className="image-upload upload-btn">
                  <label for="file-input">
                    <img src={uploadImage} alt="" width="40" />
                    Upload image
                    <input
                      style={{ display: "none" }}
                      type="file"
                      name=""
                      id="file-input"
                    />
                  </label>

                  <br />
                </div>
              </div>
            </div>
            <div className="text-end sub-btn">
              <input
                className=" btn btn-success"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
