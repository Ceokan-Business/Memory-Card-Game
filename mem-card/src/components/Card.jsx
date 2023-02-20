import React, { useState } from "react";

const Card = (props) => { 
    return ( 
        <React.StrictMode>
            <img src= { props.imageUrl} alt="generating..." />
            <p> { props.name } </p>
        </React.StrictMode>
    )
};

export default Card; 