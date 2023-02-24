import React, { useState } from "react";


const Theme = (props) => { 
    const { theme, selectTheme } = props;

    const handleClasses = () =>  { 
        let classes = "theme-option";
        theme.selected === true ? classes = "theme-option selected" : classes = classes;

        return classes;
    }

    return ( 
        <article 
            onClick={ () => { selectTheme(theme) }}
            className= { handleClasses() }>
            <img src={ theme.url} width = "200px" height = "300px" alt="...generating" />
            <p> { theme.query } </p>
        </article>
    )
};

export default Theme;