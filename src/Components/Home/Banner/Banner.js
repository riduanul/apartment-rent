import React from 'react';
import './Banner.css'; 

export default function Banner() {
    return (
       <div className="banner">
          <div className="banner-content">
            <h1>FIND YOUR APARTMENT RENT</h1>
            <div className="banner-input">
               <input type="text" placeholder="Search ...."/>
               <button className="btn btn-success">Serach</button>
            </div>
          </div>
       </div>
    )
}
