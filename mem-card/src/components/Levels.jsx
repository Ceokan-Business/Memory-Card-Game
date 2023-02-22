import React, { useState } from "react";
import Level from "./Level";

const Levels = () => { 
    const [level, setLevel] = useState (1);

    const handleNewLevel = () => { 
        setLevel(level + 1);
    }

    return (
        <>
            <h2> Level: { level } </h2>
            {level === 1 && <Level 
                handleNewLevel = { handleNewLevel }
                length = {level + 2 } level = { level }/> }
            {level === 2 && <Level 
                handleNewLevel = { handleNewLevel }
                length = {level + 2 } level = { level } /> }
            {level === 3 && <Level 
                handleNewLevel = { handleNewLevel }
                length = {level + 2 } level = { level } /> }
            {level === 4 && <Level 
                handleNewLevel = { handleNewLevel }
                length = {level + 2 }  level = { level }/> }
            {level === 5 && <Level 
                handleNewLevel = { handleNewLevel }
                length = {level + 2 }  level = { level }/> }
        </>
    )
};

export default Levels;