import React from "react";
import "./Footer.css";
import linkImg from "../../../logos/Vector.png";
import linkImg1 from "../../../logos/Vector-1.png";
import linkImg2 from "../../../logos/Vector-2.png";
import linkImg3 from "../../../logos/Vector-3.png";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="address">
        <span>
          {" "}
          <FontAwesomeIcon icon={faMapMarker} />{" "}
          <small>
            {" "}
            H#340 (4th Floor), Road#24, <br />
            New DOHS, Mohakhali, dhaka, Bangladesh <br />
            Phone: 018XXXXXXXX <br />
            E-mail: info@company.com
          </small>
        </span>
      </div>
      <div className="footer-item">
        <p>Company</p>
        <small>About</small> <br />
        <small>Site map</small> <br />
        <small>Support Center</small> <br />
        <small>Terms Condition</small>
      </div>
      <div className="footer-item">
        <p>Quick Links</p>
        <small>Quick links</small>
        <br />
        <small>Rentals</small> <br />
        <small>Sales</small>
        <br />
        <small>Contact</small>
      </div>
      <div className="footer-item">
        <p>About Us</p>
        <small>
          We are the top real estate <br />
          agency in Sydney. with agents <br />
          available to answer any <br />
          question 24/7. <br />
        </small>
        <div className="links mt-1">
          <img src={linkImg} alt="" width="40" />
          <img src={linkImg1} alt="" width="40" />
          <img src={linkImg2} alt="" width="40" />
          <img src={linkImg3} alt="" width="40" />
        </div>
      </div>
    </div>
  );
}
