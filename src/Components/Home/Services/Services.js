import React from 'react';
import './Services.css';
import serviceImage from '../../../logos/service-image.png';
import serviceImage2 from '../../../logos/service-image2.png';
import serviceImage3 from '../../../logos/service-image3.png';

export default function Services() {
    return (
        <div className="services">
            <div className="services-title">
                <p>Services</p>
                <h4>We're an agency tailored to all <br /> client's needs that always delivers</h4>
            </div>
            <div className="services-details">
                <div className="service">
                    <img src={serviceImage} alt="serviceimage" width="100" />
                    <h5>Wide Range of Properties</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, deleniti. Ipsum odio accusamus a, modi possimus voluptas quam magni sint, quaerat ullam maxime qui tenetur.</p>
                </div>
                <div className="service">
                    <img src={serviceImage2} alt="servcieimage" width="100"/>
                    <h5>Finnancing Made Easy</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, deleniti. Ipsum odio accusamus a, modi possimus voluptas quam magni sint, quaerat ullam maxime qui tenetur.</p>
                </div>
                <div className="service">
                    <img src={serviceImage3} alt="seviceimage" width="100"/>
                    <h5>Trusted by Thousands</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, deleniti. Ipsum odio accusamus a, modi possimus voluptas quam magni sint, quaerat ullam maxime qui tenetur.</p>
                </div>
            </div>
        </div>
    )
}
