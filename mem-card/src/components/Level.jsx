import React, { useState, useEffect } from "react";
import GameConditionShow from "./GameCondition";
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'CEN8svb8GoTrQ0LT-iM_ojNzinFhmnFRZcB8DE6xYqk',
});

const Level = (props) => {
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        let arrToSetImages = []; 
        async function fetchImages () {
            let arr;
            arr = await unsplash.search.getPhotos({ 
                query: 'cat',
                page: 1,
                perPage: 10,
                color: 'green',
                orientation: 'portrait'
            });

            return arr;
         }

         fetchImages().then( arr=> { 
            for (let i = 0; i < props.length; i++)  { 
                arrToSetImages[i]= { 
                        name: arr.response.results[i].alt_description,
                        selected: false,
                        id: arr.response.results[i].id,
                        url: arr.response.results[i].urls.small_s3
                    };
            }
         }).then( () => { setImages(arrToSetImages)});
    }, [props.length]);

    return (  
        <>
            <GameConditionShow length = { props.length } images= { images } />
        </>
    )
};

export default Level;