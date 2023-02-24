import React, { useState, useEffect } from "react";
import getState from "./ThemeBanners";
import Levels from "../components/Levels";
import Theme from "./Theme.jsx";
import THEMES from "./ThemeObject";

const Themes = () => { 
    const [themeOptions, setThemeOptions] = useState ([]);

    const [themePage, setThemePage] = useState(true);
    const [finalTheme, setFinalTheme] = useState({name: THEMES[0].show_text, query: THEMES[0].fetch_text, id: 0, selected: true });

    async function createThemeArray() { 
        await getState().then(array => { 
            let themeState = [];
            for(let i = 0; i < THEMES.length; i++) { 
                themeState.push( {name: THEMES[i].show_text, query: THEMES[i].fetch_text, id: i, url: array[i], selected: i === 0 ? true:false });
                setThemeOptions(themeState);
        }}).then( () => { console.log(themeOptions)})
    }

    useEffect ( () => { 
        createThemeArray();
    }, []);

    const selectTheme = (themeSelected) => { 
        let removeClassArray = themeOptions; 
        removeClassArray.map(theme => { 
            if(themeSelected !== theme &&  theme.selected === true) { 
                theme.selected = false;
            }

            if(theme === themeSelected) { 
                theme.selected = true;
            }

            return theme;
        });

        setThemeOptions(removeClassArray);
    };

    const handleSelectTheme = () => { 
        const verifyThemes = themeOptions;
        verifyThemes.map(theme =>  {
            if(theme.selected === true) { 
                setFinalTheme(theme.query);
            }

            return theme;
        });
        setThemePage(false);
    }

    return(
        <>
        {themePage && <section className="themes-section">
            <section className="themes-section-grid">
                { themeOptions.map( theme => { 
                return <Theme key = { theme.id } selectTheme = { selectTheme } theme = { theme }/> 
                })}
            </section>
            <button onClick={ handleSelectTheme }>Select Theme</button>
        </section>}

        {!themePage&& <section className="play-game-page">
          <Levels theme = { finalTheme }/>
        </section>}
        </>
    )
};

export default Themes;