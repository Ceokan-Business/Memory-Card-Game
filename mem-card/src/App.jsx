import React,  { useState, useEffect } from "react";
import CardList from "./components/CardList";
import Level from "./components/Level";
import "./styles/main.css";
import "./styles/card.css";

const App = () => { 

  return (
    <section className="app-container">
      <header>
        <h1>Memory Card</h1>
        <h2>Level</h2>
        <p>Correct Responses / Total Responses</p>
      </header>
      <Level length = {3}/>
    </section>
  )
};

export default App;