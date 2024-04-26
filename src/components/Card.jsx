import React, { useState } from "react";
import { Link } from "react-router-dom";    

const Card = (props) => {
    return (
        <div className="Card">
            <h2 className="title">{props.title}</h2>
        </div>
    )
}

export default Card;
