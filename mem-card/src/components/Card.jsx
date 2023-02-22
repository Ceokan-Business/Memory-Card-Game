import React, { useState } from "react";

const Card = (props) => { 
    return ( 
        <React.StrictMode>
            <img src= { props.imageUrl} width = "200px" height = "300px" alt="generating..." />
            <p> { props.name } </p>
        </React.StrictMode>
    )
};

export default Card; 