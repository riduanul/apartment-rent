import React from 'react';
import { useParams} from 'react-router';
import './Details.css';
import ApartmentInfo from '../../../Home/ApartmentDetails';

export default function Details() {
    const {title} = useParams();
    const apartmentInfo= ApartmentInfo;
    
    
    return (
       <div className="details">
           <div className="apartment-detail ">
            {
                apartmentInfo.filter((apartment)=> apartment.title === title)
                .map((apartment)=> (
                   <>
                        <div className="home-img image-fluid">
                            <img src={apartment.img} alt="" width="100%" height="400" />
                        </div>

                        <div className="room-detail">
                           <div className=" image-fluid"> <img src={apartment.roomImage1} alt="" width="190" height="100" /></div>
                            <div className=" image-fluid"><img src={apartment.roomImage2} alt="" width="190" height="100" /></div>
                            <div className=" image-fluid"><img src={apartment.roomImage3} alt="" width="190" height="100" /></div>
                            <div className=" image-fluid"><img src={apartment.roomImage4} alt="" width="190" height="100" /></div>
                        </div>
                        <div className="title-price">
                            <h4>{apartment.title}</h4>
                            <h4>{apartment.price}</h4>
                        </div>
                        <div>
                        <p>{apartment.PriceDetails}</p>

                        <h4>Price details--</h4>

                        <p>Rent/Month: 550 (nagotiable) <br/> service Charge: 8000/- tk per month <br /> Security Deposite: 3 month's rent <br />  Flat Release Policy : 3 moth Erlier notice required.</p>

                        <h4>Property Details--</h4>

                        <p>{apartment.PropertyDetails}</p>
                        </div>

                    </>
                ))
              
            }

           </div>
           <div className="booking ">
               <form action=""> 
                   <input type="text" placeholder="Name" />
                   <input type="text" placeholder="Phone Number" />
                   <input type="text" placeholder="E-mail Address" />
                   <textarea name="" placeholder="message" id="" cols="30" rows="6"></textarea>
                   <button className="btn request-btn btn-success">Request Booking</button>
               </form>
           </div>
       </div>
    )
}
