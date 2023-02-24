import React, { useState } from "react";
import { CONDITIONS } from "./ObjectConditions";

const InformatorGameCondition = (props) => { 
    const { gameCondition, onTryAgain, onNewLevel, backToThemePageAlert, functional } = props;

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
            { gameCondition === CONDITIONS.WIN && 
                <section className="buttons-holder">
                <button
                onClick={ () => { if(functional) onNewLevel ()} } 
                className = "next-level-button" >Next Level</button>
                <button className="win-main-menu-button"
                    onClick={ backToThemePageAlert } >Main Menu</button>
                <button className="restart-level-button"
                    onClick = { onTryAgain } > Restart Level </button>
                </section> }

            { gameCondition === CONDITIONS.LOSE && 
            <section className="buttons-holder">
            <button className="try-again-button"
                onClick={onTryAgain} >Try Again</button>
            <button className="main-menu-button" onClick={ backToThemePageAlert }>Main Menu</button>
            </section> }
        </>
    )
};

export default InformatorGameCondition;