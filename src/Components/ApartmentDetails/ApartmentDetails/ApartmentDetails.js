import React from 'react';
import './ApartmentDetails.css';
import Navbar from '../../Home/Navbar/Navbar';
import ApartmentBanner from '../ApartmentBanner/ApartmentBanner';
import Details from '../ApartmentBanner/Details/Details';



export default function ApartmentDetails() {
    return (
        <div>
            <Navbar/>
            <ApartmentBanner/>
            <Details/>
        </div>
    )
}
