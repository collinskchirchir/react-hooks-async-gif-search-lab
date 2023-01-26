import React, { useEffect, useState } from 'react';
import GifList from "./GifList";
import GifSearch from './GifSearch';

function GifListContainer() {
    const [gifs, setGifs] = useState([]);
    const [searchUrl ,setSearchUrl] = useState("eagle");
    
    useEffect(() =>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchUrl}&api_key=CNNfG1SNKNZEXreKpOetDfRnAtjpFcqE&limit=3&rating=g`)
        .then((response) => response.json())
        .then((gifs) => setGifs(gifs.data));
      },[searchUrl]
    );

    function handleSearch(input){
      setSearchUrl(input);
    }

    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <GifList gifsData={gifs}/>
            <GifSearch onFormSubmit={handleSearch}/>
        </div>
    )
}

export default GifListContainer;