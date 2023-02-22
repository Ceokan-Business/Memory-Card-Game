import React, { useState } from "react";
import { CONDITIONS } from "./ObjectConditions";

const InformatorGameCondition = (props) => { 
    const { gameCondition } = props;

    const handleInfoClasses = () =>  { 
        let classes; 
        if(gameCondition === CONDITIONS.WIN) classes = "winner-informator";
        else if(gameCondition === CONDITIONS.LOSE) classes = "loser-informator";

        return classes;
    }

    return( 
        <p
            className= { handleInfoClasses()}
        > { gameCondition }</p>
    )
};

export default InformatorGameCondition;