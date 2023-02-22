import React, { useState, useEffect } from "react";
import CardList from "./CardList";

const GameConditionShow = (props) => { 
    const { images, pressed, onSelectCard, length } = props;
    const [cardList, setCardList] = useState([]);
    const [gameCondition, setGameCondition] = useState ("Choose a card");

    useEffect( () => { 
        let mountCardList = [];
        for(let i = 0; i < images.length; i++) { 
            mountCardList[i] = images[i];
        }

        setCardList(mountCardList);
    }, []); 

       const checkStopGame = () => { 
        console.log(cardList);
        cardList.map(card => {
            if(card === pressed && card.selected === true) { 
                setGameCondition("You losed");
            }
        });

        console.log(gameCondition);
    };

    const updateSelector = () => { 
        let cardListToUpdate = cardList; 
        cardListToUpdate.map(card => { 
            if(card === pressed && gameCondition === "Choose a card") { 
                card.selected = true;
                return card;
            }
        });

        setCardList(cardListToUpdate);
    }

    useEffect( () => { 
        checkStopGame();
        updateSelector();
    }, [cardList, gameCondition])

    return ( 
        <>
        {cardList.length === 0 && <button 
            className="start-level-button"
            onClick={ () => {setCardList(images); console.log(gameCondition)}}>Start Level</button>}

        {cardList.length !== 0 &&
            <>
            <CardList length = { length } onSelectCard = {onSelectCard} cardList = { cardList } />
            </> }
        </>
    )
};

export default GameConditionShow;