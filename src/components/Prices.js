import React from 'react';
import Image1 from "../Assest/pizza1.png";
import Image2 from "../Assest/pizza2.png";
import Image3 from "../Assest/pizza3.png";
import Image4 from "../Assest/pizza4.png";

const Prices = () => {
    return(
        <div className="prices">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={Image1} alt="pizza"/>
                            </div>
                            <h1 className="price__heading">
                                The Unthinkable Pizza
                            </h1>
                            <p className="price__text">
                                Loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique 100% Vegetarian pizza
                            </p>
                            <p className="price_rs">
                                $40.00
                            </p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={Image2} alt="pizza"/>
                            </div>
                            <h1 className="price__heading">
                                The Farmhouse
                            </h1>
                            <p className="price__text">
                                Delightful combination of onion, capsicum, tomato & grilled mushroom
                            </p>
                            <p className="price_rs">
                                $65.00
                            </p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={Image3} alt="pizza"/>
                            </div>
                            <h1 className="price__heading">
                                Veggie Paradise
                            </h1>
                            <p className="price__text">
                                The awesome foursome! Golden corn, black olives, capsicum, red paprika
                            </p>
                            <p className="price_rs">
                                $88.00
                            </p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="price">
                            <div className="price__img">
                                <img src={Image4} alt="pizza"/>
                            </div>
                            <h1 className="price__heading">
                                Cheese n Corn
                            </h1>
                            <p className="price__text">
                                Sweet & Juicy Golden corn and 100% real mozzarella cheese in a delectable combination !
                            </p>
                            <p className="price_rs">
                                $250.00
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )

};

export default Prices;