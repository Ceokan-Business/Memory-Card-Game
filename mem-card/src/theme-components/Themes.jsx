import React, { useState, useEffect } from "react";
import getState from "./ThemeBanners";
import Levels from "../components/Levels";
import Theme from "./Theme.jsx";
import THEMES from "./ThemeObject";

const Themes = () => { 
    const [themeOptions, setThemeOptions] = useState ([]);
    const [themePage, setThemePage] = useState(true);
    const [levelsPage, setLevelsPage] = useState(false);
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

    const goLevelsPage = () => {
        setThemePage(false);
        setLevelsPage(true);
    }

    const backToThemePage = () => { 
        setThemePage(true);
        setLevelsPage(false);
    }

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

            goLevelsPage();
            return theme;
        });
    }

    return(
        <>
        {themePage && <section className="themes-section">
            <p className="themes-section-informator"> Please select a theme </p>
            <section className="themes-section-grid">
                { themeOptions.map( theme => { 
                return <Theme key = { theme.id } selectTheme = { selectTheme } theme = { theme }/> 
                })}
            </section>
            <button onClick={ handleSelectTheme }>Select Theme</button>
        </section>}

        {!themePage && levelsPage && <section className="play-game-page">
          <Levels theme = { finalTheme } backToThemePage = {backToThemePage}/>
        </section>}
        </>
    )
};

export default Themes;