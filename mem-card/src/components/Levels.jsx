import React, { useState } from "react";
import Level from "./Level";

const Levels = () => { 
    const [level, setLevel] = useState (1);

    const handleNewLevel = () => { 
        setLevel(level + 1);
    }

    return (
        <>
            <p> Level: { level } </p>
            {level === 1 && <Level 
                handleNewLevel = { handleNewLevel }
                length = {level + 2 } /> }
            {level === 2 && <Level 
                handleNewLevel = { handleNewLevel }
                length = {level + 2 } /> }
            {level === 3 && <Level 
                handleNewLevel = { handleNewLevel }
                length = {level + 2 } /> }
            {level === 4 && <Level 
                handleNewLevel = { handleNewLevel }
                length = {level + 2 } /> }
            {level === 5 && <Level 
                handleNewLevel = { handleNewLevel }
                length = {level + 2 } /> }
        </>
    )
};

export default Levels;