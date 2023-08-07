import React from "react";
import Loc from "../assets/loc.png";

const Card = () => {
    return(
        <div>
            <div className="photo">
                <img src={"/images/hhh.jpg"} />
            </div>
            <div className="cardDetails">
                <div>
                    <img src={Loc} alt="loc" />
                    <p>JAPAN</p>
                    <a href="#">View on Google Maps</a>
                </div>
            </div>
        </div>
    );
}

export default Card;