import React, { useState, useEffect } from "react";
import { CONDITIONS } from "./ObjectConditions";
import CardList from "./CardList";

const GameConditionShow = (props) => { 
    const { images, length } = props;
    const [cardList, setCardList] = useState([]);
    const [gameCondition, setGameCondition] = useState (CONDITIONS.IN_GAME);
    const [pressed, setPressed] = useState({});
    const [timesHit, setTimesHit] = useState(0);

    useEffect( () => { 
        let mountCardList = [];
        for(let i = 0; i < images.length; i++) { 
            mountCardList[i] = images[i];
        }

        setCardList(mountCardList);
    }, []); 

    function selectPressed(cardToVerify) { 
        let index; 
        cardList.forEach( card => { 
            if(card.id === cardToVerify.id) { 
                if(card.selected === true) setGameCondition(CONDITIONS.LOSE)
                setPressed(card);
            }
            return card;
        });

        if(gameCondition === CONDITIONS.IN_GAME)
            setTimesHit(timesHit + 1);
    }

    async function handleCards () {
        if(gameCondition === CONDITIONS.IN_GAME) { 
            
            if(timesHit === length) setGameCondition(CONDITIONS.WIN);
            let cardListToUpdate = cardList; 
            cardListToUpdate.map(card => { 
                if(card === pressed) { 
                    card.selected = true;
                }

                return card;
            })
            setCardList(cardListToUpdate);
        }
};

    useEffect( () => { 
        handleCards();
    })

    return ( 
        <>
        {cardList.length === 0 && <button 
            className="start-level-button"
            onClick={ () => {setCardList(images)}}>Start Level</button>}

        {cardList.length !== 0 &&
            <>
            <p> { gameCondition } </p>
            <CardList length = { length } selectPressed = { selectPressed } cardList = { cardList } pressed = {pressed} />
            </> }
        </>
    )
};

export default GameConditionShow;