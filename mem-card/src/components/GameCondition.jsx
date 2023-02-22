import React, { useState, useEffect } from "react";
import { CONDITIONS } from "./ObjectConditions";
import InformatorGameCondition from "./InformatorGameCondition";
import CardList from "./CardList";

const GameConditionShow = (props) => { 
    const { images, length, handleNewLevel, level } = props;
    const [cardList, setCardList] = useState([]);
    const [gameCondition, setGameCondition] = useState(CONDITIONS.IN_GAME);
    const [pressed, setPressed] = useState({});
    const [timesHit, setTimesHit] = useState(0);

    const [firstLevel, setFirstLevel] = useState(true);
    /* Effects */
    useEffect( () => { 
        let mountCardList = [];
        for(let i = 0; i < images.length; i++) { 
            mountCardList[i] = images[i];
        }

        setCardList(mountCardList);
    }, []); 

    useEffect( () => { 
        handleCards();
        if(level > 1)
            setCardList(images);
    })


    /* Select Card Functionality */
    function selectPressed(cardToVerify) { 
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

    /* Buttons Functionality */

    const handleTryAgain = () => { 
        /* Mount Card List */
        let mountCardList = [];
        for(let i = 0; i < length; i++) { 
            mountCardList[i] = images[i];
            mountCardList[i].selected = false;
        }

        setCardList(mountCardList);
        setGameCondition(CONDITIONS.IN_GAME)
        setPressed( {} );
        setTimesHit(0);
    }

    const handleGoMainMenu = () => { 

    }

    /* UI */
    return ( 
        <>
        { level === 1 && firstLevel === true && <button className="start-level-button" onClick = { () => { 
            setCardList(images);
            setFirstLevel(false);
        }}>Start Level</button> }

        {cardList.length !== 0 &&
            <>
            <p className="times-hit">Cards selected: { timesHit} { `/${length}` }</p>
            
            {gameCondition === CONDITIONS.IN_GAME && 
             <CardList length = { length } 
                selectPressed = { selectPressed } 
                cardList = { cardList } 
                gameCondition = {gameCondition} />
            }
           
            { gameCondition !== CONDITIONS.IN_GAME && 
                <section className="informator-holder">
                <InformatorGameCondition gameCondition = {gameCondition} 
                    onNewLevel = { handleNewLevel }
                    onTryAgain = { handleTryAgain }
                    onMainMenu = { handleGoMainMenu } /> 
                </section>
            }
            </> }
        </>
    )
};

export default GameConditionShow;