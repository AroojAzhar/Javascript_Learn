import React from 'react';
import Navbar from "./Navbar";

const Header = () => {
    return(
        <div className="banner">
            <Navbar/>
        <div className="banner__content">
            <div>
               <div className="container">
               <div className="container">
                   <div className="banner__text">
                       <h3>Pizza Delivery</h3>
                       <h1>MAESTRO PIZINNI</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eius expedita magnam minus, nam numquam quisquam quo recusandae ullam voluptatem.</p>
                   <div className="banner__btn">
                       <a href="" className="btn btn-smart">Deliver Now</a>
                   </div>
                   </div>
               </div>
               </div>

            </div>
        </div>
        </div>
    )};

export default Header;
