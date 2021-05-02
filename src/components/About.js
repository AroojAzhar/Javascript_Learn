import React from 'react';

const About = () => {
    return(
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">
                        <h3>About US</h3>
                        <h1>Welcome to Maestro Pizzini</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolores enim est facere incidunt soluta totam velit. Inventore, odio omnis.</p>
                        <div className="about__btn">
                            <a href="" className="btn btn-smart">Read More</a>
                        </div>
                    </div>
                    <div className="col-6">
                    <div className="about__img">
                        <img src="https://www.recipetineats.com/wp-content/uploads/2020/05/Pizza-Crust-without-yeast_5-SQ.jpg" alt=""/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;