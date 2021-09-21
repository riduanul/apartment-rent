/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Login.css';
import Navbar from '../Home/Navbar/Navbar';
import {Link} from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <>
            <Navbar/>
            </>
            <div className="login">
                <h4>Login</h4>
                <form action="">
                    <input type="text" placeholder="Email" />
                    <input type="password" name="" id="" placeholder="Password" />
                    <div className="check">
                        <div>
                            <input type="checkbox" name="checkbox" id="" />
                        </div>
                        <div>
                            <a href="#">Forgot Password</a>
                        </div>
                    </div>
                    <button className="login-btn">Login</button>
                </form>
               <Link to="/createAccount"> <p>Don't have an account? <a href="#">Create an account</a></p></Link>
            </div>
           <div className="fb-google">
            <button className='ad-btn'>Continute with Facebook</button> <br />
            <button className='ad-btn'>Continute with Google</button>
           </div>
        </div>
    )
}
