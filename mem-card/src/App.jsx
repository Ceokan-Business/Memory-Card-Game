import React,  { useState, useEffect } from "react";
import Themes from "./theme-components/Themes.jsx";
import './styles/intro.css'
import "./styles/main.css";
import "./styles/card.css";
import "./styles/themes.css";

const App = () => { 
  const [firstPage, setFirstPage] = useState(true);

  const goThemePage = () => { 
    setFirstPage(false);
  }

  return (
    <section className="app-container">

      {/* ***************************** */}
      {/* **** | First Page Game | **** */}
      {/* ***************************** */}
      {
        firstPage && <article>
          <header className="intro-header">

            <h1 className="intro-h1">Memory Card</h1>
            <button 
              onClick={ goThemePage }
              className="intro-button">Play</button>

          </header>
        </article>
      }

      {!firstPage &&
        <section className="theme-page">
          <header>
            <h1>Memory Card</h1>
          </header>
          <Themes />
        </section>
      }

{/*       {!firstPage && !themePage &&  
        <section className="play-game-page">
          <header>
            <h1>Memory Card</h1>
          </header>
          <Levels />
        </section>
      } */}

    </section>
  )
};

export default App;