import React, { useState, useEffect } from "react";
import Theme from "./Theme";

const THEME_ARRAY = ['space', 'cat', 'dog', 'food', 'coffee', 'music']

const Themes = () => { 
    const [themeOptions, setThemeOptions] = useState ([]);

    const createThemeArray = () => { 
        let themeState = [];
        for(let i = 0; i < THEME_ARRAY.length; i++) { 
            themeState.push( {query: THEME_ARRAY[i], id: i})
        }

        setThemeOptions(themeState);
        console.log(themeOptions);
    }

    useEffect ( () => { 
        createThemeArray();
    }, []);

    return(
        <section className="themes-section">
            <section className="themes-section-grid">
                { themeOptions.map( theme => { 
                return <Theme key = { theme.id } theme = { theme }/> 
                })}
            </section>
            <button>Select Theme</button>
        </section>
    )
};

export default Themes;