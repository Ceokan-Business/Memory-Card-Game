import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";

const CardList = (props) => { 
    const [pressed, setPressed] = useState({});
    const [cardList, setCardList] = useState([]);

    useEffect( () => { 
        let cards = [];

        for(let i = 0; i < props.length; i++) { 
            cards[i] = {name: i, 
                selected: false, 
                imageUrl: "https://picsum.photos/200/300", 
                ID: i }
        }

        setCardList(cards);
    }, []);

    const selectCard = (cardToVerify) => { 
            cardList.forEach( card => { 
            if(card.ID === cardToVerify.ID) { 
                setPressed(card);
            }

            return card;
        });
    };

    return (
        <section className="card-list">
            {cardList.map(card => { 
                return (
                    <article
                        onClick = { () => { selectCard(card)}}
                        key= {card.ID}
                        className = "card" >
                            <Card name = {card.name} imageUrl = {card.imageUrl}/> 
                        </article>
                )
            })}
        </section>
    )
};

export default CardList;