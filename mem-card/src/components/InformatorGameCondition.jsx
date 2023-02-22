import React, { useState } from "react";
import { CONDITIONS } from "./ObjectConditions";

const InformatorGameCondition = (props) => { 
    const { gameCondition, onTryAgain, onNewLevel } = props;

    const handleInfoClasses = () =>  { 
        let classes; 
        if(gameCondition === CONDITIONS.WIN) classes = "winner-informator";
        else if(gameCondition === CONDITIONS.LOSE) classes = "loser-informator";

        return classes;
    }

    return( 
        <> 
            <p
                className= { handleInfoClasses()} > { gameCondition }</p>
            { gameCondition === CONDITIONS.WIN && <button
                onClick={ onNewLevel } >Next Level</button> }
            { gameCondition === CONDITIONS.LOSE && 
            <section className="buttons-holder">
            <button className="try-again-button"
                onClick={onTryAgain} >Try Again</button>
            <button className="main-menu-button">Main Menu</button>
            </section> }
        </>
    )
};

export default InformatorGameCondition;