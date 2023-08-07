import React from "react";
import Card from "./Card";
import Data from "./data";
import "./CardList.css";

const CardList = () => {

    const List = Data.map((item) => {
        return <Card 
                    image={item.img}    
                    location={item.location}
                    locationMap={item.locationMap}
                    title={item.title}
                    date={item.date}
                    text={item.text} 
                />
    });
    
    return(
        <div className="cardListCont">
            {List}
        </div>
    );
}

export default CardList;