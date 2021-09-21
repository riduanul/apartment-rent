/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './CreateAccount.css';
import Navbar from '../../Home/Navbar/Navbar';
import {Link} from 'react-router-dom';

export default function CreateAccount() {
    return (
        <div>
            <>
            <Navbar/>
            </>
            <div className="create-account">
                <h3>Create Account</h3>
                <form action="">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="text" placeholder="Email" />
                    <input type="password" name="" id="" placeholder="Password" />
                    <input type="password" name="" id="" placeholder="Confirm Password" />
                    
                    <button className="login-btn">Create Account</button>
                </form>
                <Link to="/login"><p>Already have an account? <a href="#">Login</a></p></Link>
            </div>
           <div className="fb-google">
                <button className='ad-btn'>Continute with Facebook</button> <br />
                <button className='ad-btn'>Continute with Google</button>
           </div>
        </div>
    )
}
