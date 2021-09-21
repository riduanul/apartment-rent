import React from 'react';
import './Apartment.css';
import { faBed, faBath, faMapMarker} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

export default function Apartment(props) {
    const {img, title, price} = props.apartment;
    return (
        <div className="apartment">
            <img src={img} alt={img}  />
                <span><h5>{title}</h5></span>
                <p className="location" > <span ><FontAwesomeIcon icon={faMapMarker} />  <small >Nasirabad H/S, Chattogram.</small></span> </p>
            <div className="rooms">
                <span> <FontAwesomeIcon icon={faBed} /> <small>3 Bedrooms</small></span>
                <span> <FontAwesomeIcon icon={faBath} /> <small>2 Bathrooms</small></span>
            </div>
            <div className="price">
                <h4>{price}</h4>
                <Link to={{
                    pathname: `details/${title}`,
                    state: {
                        img: img,
                        title: title,
                        price: price
                    }}
                    }><button className="btn btn-success">Details</button></Link>
            </div>


        </div>
    )
}
