import React, { useEffect, useState } from "react";
import { SearchResults } from "./Components/SearchResults";
import "./style.css";

const apiKey = "7uh3o7c6UcqyasaONsLjtcxeBERATgjc";
const searchGifUrl = "https://api.giphy.com/v1/gifs/search";

export const App = (props) => {
  const { title } = props;
  var [gifs, setGifs] = useState([]);

  const searchGifs = (searchText) => {
    fetch(
      searchGifUrl + "?api_key=" + apiKey + "&q=" + searchText + "&limit=50"
    )
      .then((res) => res.json())
      .then((results) => setGifs(results.data));
  };

  // console.log(gifs
  //   )
  useEffect(() => {
    searchGifs();
  }, []);

  const keydownHandler = (event) => {
    if (event.keyCode === 13) {
      searchGifs(event.target.value);
    }
  };

  return (
    <div className="app">
      <header>{title}</header>
      <main>
        <h1>SEARCH GIPHY</h1>
        {/* <img src={gifs[0].images.original.url}></img> */}
        <input onKeyDown={keydownHandler} placeholder="Search GIF"></input>

        <SearchResults slike={gifs} />
      </main>
    </div>
  );
};

// setGifs(results.data)

// const colCount =4;
// const sortedData= results.data.reduce((acc,e,i)=>{
//   const niz=  i %colCount;
//   if(!acc[niz] )acc[niz] = []
//   acc[niz].push(e)
//   return acc;
// },[]);
// setGifs(sortedData)
