import React, { useState, useEffect } from "react";
import GameConditionShow from "./GameCondition";
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'CEN8svb8GoTrQ0LT-iM_ojNzinFhmnFRZcB8DE6xYqk',
});

const Level = (props) => {
    const [images, setImages] = useState([]);
    const { handleNewLevel, level, length } = props;
    
    useEffect(() => {
        let arrToSetImages = []; 
        async function fetchImages () {
            let arr;
            arr = await unsplash.search.getPhotos({ 
                query: 'food',
                page: 1,
                perPage: 30,
                orientation: 'portrait'
            });

            console.log(arr)

            return arr;
         }

         fetchImages().then( arr=> { 
            for (let i = 0; i < length; i++)  { 
                arrToSetImages[i]= { 
                        name: arr.response.results[i].alt_description,
                        selected: false,
                        id: arr.response.results[i].id,
                        url: arr.response.results[i].urls.small_s3
                    };
            }
         }).then( () => { setImages(arrToSetImages);});
    }, [length, level]);

    return (  
        <>
            <GameConditionShow 
                length = { length }
                level = { level }
                handleNewLevel = { handleNewLevel }
                images= { images } />
        </>
    )
};

export default Level;