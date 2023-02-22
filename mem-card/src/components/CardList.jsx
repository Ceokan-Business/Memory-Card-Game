import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import { CONDITIONS } from "./ObjectConditions.js";

const CardList = (props) => { 
    const { cardList, selectPressed, gameCondition} = props;


    return (
        <>
        <section className= "card-list">
            {cardList.map(card => { 
                return (
                    <article 
                        onClick = { () => { selectPressed(card) }}
                        key= {card.id}
                        className = "card" >
                            <Card name = {card.name} imageUrl = {card.url}/> 
                        </article>
                )
            })}
        </section>
        </>
    )
};

export default CardList;