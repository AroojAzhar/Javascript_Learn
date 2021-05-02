import React from 'react';
import Image from "../Assest/pizza.jpg";
const Menu = () => {
    return(
        <div className = "about">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="about__img">
                            <img src={Image} alt=""/>
                        </div>
                    </div>
                    <div className="col-6 p-25">
                        <h3>The Pizza Menu</h3>
                        <h1>Chicago This Crust</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolores enim est facere incidunt soluta totam velit. Inventore, odio omnis.</p>
                        <div className="about__btn">
                            <a href="" className="btn btn-smart">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Menu;