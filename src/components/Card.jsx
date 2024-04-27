import React, { useState } from "react";
import { Link } from "react-router-dom";    
import './Card.css'

const Card = (props) => {
    return (
        <Link to={`/post/${props.id}`}>
            <div className="Card">
                <p className="time">{"posted at " + props.created_at}</p>
                <h2 className="title">{props.title}</h2>
                <p className="upvotes">Upvotes: </p>
            </div>
        </Link>
    )
}

export default Card;
