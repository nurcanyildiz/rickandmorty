import React from "react";
import Card from "./Card";
import "./cards.css";


function Cards({ characters }) {
    return (
        <>
            <div className="cards">
                {characters.map((character, index) => (
                    <Card cardData={character} key={index} />
                ))}
            </div>
        </>
    );
}

export default Cards;