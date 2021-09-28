import React, { useState } from "react";
import "./AddRentHouse.css";
import Sidebar from "../Sidebar/Sidebar";
import uploadImage from "../../../logos/upload.png";
import { useAuth } from "../../../Context/AuthContext";
import { useHistory } from "react-router";

export default function AddRentHouse() {
  const { currentUser } = useAuth();
  const location = useHistory();
  const history = location;
  const [inputData, setInputData] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file.image);
    data.append("title", inputData.title);
    data.append("price", inputData.price);
    data.append("bathroom", inputData.bathroom);
    data.append("bedroom", inputData.bedroom);
    data.append("priceDetails", inputData.priceDetails);
    data.append("propertyDetails", inputData.propertyDetails);

    // data.append("inputs", inputData.price);
    fetch("http://localhost:5000/newApartment", {
      method: "POST",
      body: data,
    });
    alert("your Apartment added sucessfully!");
    history.push("/");
  };

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
          <div>{currentUser && <h6>{currentUser.displayName}</h6>}</div>
        </div>
        <div className="addrent">
          <form action="" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <label>Apartment Title</label> <br />
                <input
                  type="text"
                  name="title"
                  onChange={(e) =>
                    setInputData({ ...inputData, title: e.target.value })
                  }
                />{" "}
                <br />
                <label>No of Bedrooms</label> <br />
                <input
                  type="text"
                  name="bedroom"
                  onChange={(e) =>
                    setInputData({ ...inputData, bedroom: e.target.value })
                  }
                />{" "}
                <br />
                <label>Property Details</label> <br />
                <input
                  type="text"
                  name="propertyDetails"
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      propertyDetails: e.target.value,
                    })
                  }
                />{" "}
                <br />
              </div>
              <div className="col-md-4">
                <label>Location</label> <br />
                <input
                  type="text"
                  name="location"
                  onChange={(e) =>
                    setInputData({ ...inputData, location: e.target.value })
                  }
                />{" "}
                <br />
                <label>No of Bathroms</label> <br />
                <input
                  type="text"
                  name="bathroom"
                  onChange={(e) =>
                    setInputData({ ...inputData, bathroom: e.target.value })
                  }
                />{" "}
                <br />
                <label>Apartment Image</label>
                <div className="image-upload upload-btn">
                  <label>
                    <img src={uploadImage} alt="" width="30" />
                    <small> Upload image</small>
                    <input
                      style={{ display: "none" }}
                      type="file"
                      name="image"
                      id="file-input"
                      multiple
                      onChange={(e) =>
                        setFile({ ...file, image: e.target.files[0] })
                      }
                    />
                  </label>

                  <br />
                </div>
              </div>
              <div className="col-md-4">
                <label>Price</label> <br />
                <input
                  type="text"
                  name="price"
                  onChange={(e) =>
                    setInputData({
                      ...inputData,
                      price: e.target.value,
                    })
                  }
                />{" "}
                <br />
                <label>Price Details</label> <br />
                <input
                  type="text"
                  name="priceDetails"
                  onChange={(e) =>
                    setInputData({ ...inputData, priceDetails: e.target.value })
                  }
                />{" "}
                <br />
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
