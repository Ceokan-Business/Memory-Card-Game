import React, { useState } from "react";
import { QUOTES } from "./ObjectConditions";

const QuoteGenerator = () => { 
    const randomNumber = Math.floor(Math.random() * QUOTES.length)

    return ( <p className="quote">" { QUOTES[randomNumber] } "</p> )
};
export default QuoteGenerator;