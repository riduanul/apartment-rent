import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import "./Details.css";
import roomImage1 from "../../../../images/room-1.jpg";
import roomImage2 from "../../../../images/room-2.jpg";
import roomImage3 from "../../../../images/room-3.jpg";
import roomImage4 from "../../../../images/room-4.jpg";

export default function Details() {
  const [bookingInfo, setBookingInfo] = useState();
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const { title } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/apartment")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/booking", {
      method: "POST",
      body: JSON.stringify(bookingInfo),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    alert("Your request has been sent sucessfully.!");
    history.push("/");
  };

  return (
    <div className="details">
      <div className="apartment-detail ">
        {loading && (
          <p style={{ color: "green", marginTop: "30px", textAlign: "center" }}>
            Loading....
          </p>
        )}
        {info &&
          info
            .filter((apartment) => apartment.title === title)
            .map((apartment) => (
              <>
                <div className="home-img image-fluid">
                  {apartment.img.img ? (
                    <img
                      src={`data:image/png;base64,${apartment.img.img}`}
                      alt=""
                      width="100%"
                      height="400"
                    />
                  ) : (
                    <img src={apartment.img} alt="" width="100%" height="400" />
                  )}
                </div>

                <div className="room-detail">
                  <div className=" image-fluid">
                    <img src={roomImage1} alt="" width="190" height="100" />
                  </div>
                  <div className=" image-fluid">
                    <img src={roomImage2} alt="" width="190" height="100" />
                  </div>
                  <div className=" image-fluid">
                    <img src={roomImage3} alt="" width="190" height="100" />
                  </div>
                  <div className=" image-fluid">
                    <img src={roomImage4} alt="" width="190" height="100" />
                  </div>
                </div>
                <div className="title-price">
                  <h4>{apartment.title}</h4>
                  <h4>{apartment.price}</h4>
                </div>
                <div>
                  <p>{apartment.PriceDetails}</p>

                  <h4>Price details--</h4>

                  <p>
                    Rent/Month: 550 (nagotiable) <br /> service Charge: 8000/-
                    tk per month <br /> Security Deposite: 3 month's rent <br />{" "}
                    Flat Release Policy : 3 moth Erlier notice required.
                  </p>

                  <h4>Property Details--</h4>

                  <p>{apartment.propertyDetails}</p>
                </div>
              </>
            ))}
      </div>
      <div className="booking ">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, phone: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="E-mail Address"
            name="email"
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Apartment Name"
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Price"
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, price: e.target.value })
            }
          />

          <textarea
            name="msg"
            placeholder="message"
            cols="30"
            rows="6"
            onChange={(e) =>
              setBookingInfo({ ...bookingInfo, message: e.target.value })
            }
          ></textarea>
          <button type="submit" className="btn request-btn btn-success">
            Request Booking
          </button>
        </form>
      </div>
    </div>
  );
}
