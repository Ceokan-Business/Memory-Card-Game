import React from "react";
import Card from "./Card.jsx";

const CardList = (props) => { 
    const { images, onSelectCard, pressed } = props;

    return (
        <>
        <section className="card-list">
            {images.map(card => { 
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