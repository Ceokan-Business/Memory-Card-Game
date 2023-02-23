import React,  { useState, useEffect } from "react";
import Levels from "./components/Levels";
import './styles/intro.css'
import "./styles/main.css";
import "./styles/card.css";

const App = () => { 
  const [firstPage, setFirstPage] = useState(true);

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
              onClick={() => { setFirstPage(false) }}
              className="intro-button">Play</button>
              </section>
          </header>
        </article>
      }



      {!firstPage &&  
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