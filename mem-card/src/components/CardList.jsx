import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";

const CardList = (props) => { 
    const { cardList, onSelectCard } = props;

    return (
        <>
        <section className="card-list">
            {cardList.map(card => { 
                return (
                    <article 
                        onClick = { () => { onSelectCard(card)}}
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