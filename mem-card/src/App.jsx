import React,  { useState, useEffect } from "react";
import Levels from "./components/Levels";
import Themes from "./theme-components/Themes";
import './styles/intro.css'
import "./styles/main.css";
import "./styles/card.css";
import "./styles/themes.css";

const App = () => { 
  const [firstPage, setFirstPage] = useState(false);
  const [themePage, setThemePage] = useState(true);

  return (
    <section className="app-container">

      {/* ***************************** */}
      {/* **** | First Page Game | **** */}
      {/* ***************************** */}
      {
        firstPage && <article>
          <header className="intro-header">
            <section className="vertical-bars">
            <h1 className="intro-h1">Memory Card</h1>
            <button 
              onClick={() => { setFirstPage(false); setThemePage(true) }}
              className="intro-button">Play</button>
              </section>
          </header>
        </article>
      }

      {!firstPage && themePage && 
        <section className="theme-page">
          <header>
            <h1>Memory Card</h1>
          </header>
          <Themes/>
        </section>
      }

      {!firstPage && !themePage &&  
        <section className="play-game-page">
          <header>
            <h1>Memory Card</h1>
          </header>
          <Levels />
        </section>
      }

    </section>
  )
};

export default App;