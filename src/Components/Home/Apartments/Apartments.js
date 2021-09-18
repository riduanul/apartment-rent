import React from 'react';
import './Apartments.css';
import apartmentDetails from '../../Home/ApartmentDetails';
import Apartment from '../Apartment/Apartment';


export default function Apartments() {
    const apartments = apartmentDetails;
    return (
       <div>
           <div className="apartments-title">
               <p>House Rent</p>
               <h2>Discover the latest Rent <br /> available today</h2>
               <div className="apartments">
                   {
                       apartments.map((apartment)=> <Apartment key={apartment.title} apartment={apartment}/>)
                   }
               </div>
           </div>
       </div>
    )
}
