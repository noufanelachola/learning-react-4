import React from "react";
import Loc from "../assets/loc.png";
import "./Card.css";

const Card = ({image,location,locationMap,title,date,text}) => {
    return(
        <div className="CardCont">
            <div className="photo">
                <img src={image} />
            </div>
            <div className="cardDetails">
                <div className="cardDetailsFirst">
                    <img src={Loc} alt="loc" className="locIcon"/>
                    <p className="loc">{location}</p>
                    <a href={locationMap} className="locLink">View on Google Maps</a>
                </div>
                <div className="cardDetailsSecond" >
                    <h1 className="cardTitle">
                        {title}
                    </h1>
                    <p className="cardDate semiBold">
                        {date}
                    </p>
                    <p className="cardText">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;