import React,  { useState, useEffect } from "react";
import Levels from "./components/Levels";
import Level from "./components/Level";
import "./styles/main.css";
import "./styles/card.css";

const App = () => { 
  return (
    <section className="app-container">
      <header>
        <h1>Memory Card</h1>
      </header>
      <Levels />
    </section>
  )
};

export default App;