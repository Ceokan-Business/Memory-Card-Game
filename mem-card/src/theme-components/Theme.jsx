import React, { useState } from "react";

const Theme = (props) => { 
    const { theme } = props;
    return ( 
        <article className="theme-option">
            { theme.query }
        </article>
    )
};

export default Theme;